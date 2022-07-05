"reach 0.1";

const Player = {
  getFingers: Fun([], UInt), // input would be UInt
  //   getFingers: Fun([UInt], UInt), // input would be UInt
  getFingersGuess: Fun([], UInt), // input would be UInt
  //   getFingerGuess: Fun([UInt], UInt), // input would be UInt
  seeOutcome: Fun([UInt, UInt, UInt], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", Player);
  const Bob = Participant("Bob", Player);
  init();
  Alice.only(() => {
    const fingersAlice = declassify(interact.getFingers());
    const guessAlice = declassify(interact.getFingersGuess());
  });

  Alice.publish(fingersAlice, guessAlice);
  commit();

  Bob.only(() => {
    const fingersBob = declassify(interact.getFingers());
    const guessBob = declassify(interact.getFingersGuess());
  });
  Bob.publish(fingersBob, guessBob);
  commit();

  const totalFingers = fingersAlice + fingersBob;
  const outcomeBob = guessBob === totalFingers ? 1 : 0;
  const outcomeAlice = guessAlice === totalFingers ? 1 : 0;

  // should they only see their own outcome??- yes they should be able to see their outcome

  // for signifying who is who -- would be better to pass string?- I dont understand this question
  const ALICE = 0;//what is this meant to do?
  const BOB = 1;

  each([Alice, Bob], () => {
    interact.seeOutcome(ALICE, outcomeAlice, totalFingers);
    interact.seeOutcome(BOB, outcomeBob, totalFingers);
  });
});
