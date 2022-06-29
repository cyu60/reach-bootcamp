import { loadStdlib } from "@reach-sh/stdlib";
// import * as backend from "../index.main.mjs";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

// frontend -- similar to data access object

// initiate test acc with 100 tokens
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

// deploy contract
// Alice will always be the deployer -- first to deploy (must be participant)
// Use API for multiple people
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = ["Rock", "Paper", "Scissors"];
const OUTCOME = ["Bob wins", "Draw", "Alice wins"];

const Player = (Who) => ({
  getHand: () => {
    const hand = Math.floor(Math.random() * 3);
    console.log(`${Who} played ${HAND[hand]}`);
    return hand;
  },
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
  },
});

// Interact Obj -- mirror backend
await Promise.all([
  ctcAlice.p.Alice({
    // interact obj here
    ...Player('Alice'),
  }),
  ctcBob.p.Bob({
    // interact obj here
    ...Player("Bob"),
  }),
]);
