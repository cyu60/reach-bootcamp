"reach 0.1";

const Player = {
  getChallenge: Fun([], UInt),
  seeResult: Fun([UInt], Null),
};
export const main = Reach.App(() => {
  const Pat = Participant("Pat", { ...Player });
  const Vanna = Participant("Vanna", { ...Player });
  init();

  Pat.only(() => {
    const challengePat = declassify(interact.getChallenge());
  });
  Pat.publish(challengePat);
  commit();

  Vanna.only(() => {
    const challengeVanna = declassify(interact.getChallenge());
  });
  Vanna.publish(challengeVanna);
  commit();
  // Yes you should commit at the end of every consensus step, a commit signifies the end of a consensus step.
});
