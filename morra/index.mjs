import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

// initiate test acc with 100 tokens
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const OUTCOME = ["wrong guess", "correct guess"];
const PARTICIPANTS = ["Alice", "Bob"];

// NOTE: Will need to modify when we can get Alice and Bob's input!
// each player fingers limit: 2, total fingers limit: 4
const Player = (Who) => ({
  getFingers: () => {
    const fingers = Math.floor(Math.random() * 2);
    console.log(`${Who} raised ${fingers} fingers`);
    return fingers;
  },
  getFingersGuess: () => {
    const totalFingers = Math.floor(Math.random() * 4);
    console.log(`${Who} guessed ${totalFingers} total fingers were raised`);
    return totalFingers;
  },
  seeOutcome: (participant, outcome, totalFingers) => {
    console.log(
      `${Who} saw ${PARTICIPANTS[participant]} have a ${OUTCOME[outcome]} at ${totalFingers}`
    );
  },
});

await Promise.all([
  ctcAlice.p.Alice({ ...Player("Alice") }),
  ctcBob.p.Bob({ ...Player("Bob") }),
]);
