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
  });
  const Bob = Participant("Bob", {
    // interact interface here
    ...Player,
  });
  init();

  Alice.only(() => {
    const handAlice = declassify(interact.getHand());
  });
  Alice.publish(handAlice);
  commit();

  Bob.only(() => {
    const handBob = declassify(interact.getHand());
  });
  Bob.publish(handBob);

  const outcome = (handAlice + (4 - handBob)) % 3;
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
