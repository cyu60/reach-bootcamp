"reach 0.1";

// Backend file -- schema of backend

const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  // APP INIT -- See Roam for more info
  const Alice = Participant("Alice", {
    // Alice name needs to match front end
    // interact interface
    ...Player,
    wager: UInt,
  });
  const Bob = Participant("Bob", {
    // interact interface here
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  Alice.only(() => {
    // Alice initiates and so pays the wager fee
    const wager = declassify(interact.wager);
    const handAlice = declassify(interact.getHand());
  });
  Alice.publish(wager, handAlice)
    .pay(wager);
  commit();

  Bob.only(() => {
    // Bob accepts the wager
    interact.acceptWager(wager);
    const handBob = declassify(interact.getHand());
  });
  Bob.publish(handBob)
    .pay(wager);

  const outcome = (handAlice + (4 - handBob)) % 3;

  // transfer the money between acc in the consensus step
  const            [forAlice, forBob] = 
    outcome == 2 ? [       2,      0] :
    outcome == 0 ? [       0,      2] :
    /* tie      */ [       1,      1];
  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
