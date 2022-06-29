// https://reachsh.notion.site/Week-2-Bets-and-Wagers-594cdddc810a481dbd4809f31345720f
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const role = "seller";
console.log(`Your role is ${role}.`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

const suStr = stdlib.standardUnit
const toAU = (su) => stdlib.parseCurrency(su)
const toSU = (au) => stdlib.formatCurrency(au, 4)
const iBalance = toAU(1000)
const showBalance = async(acc) => console.log((`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}`));
// console.log(`standard unit: ${stdlib.standardUnit}`);
// console.log(`atomic unit: ${stdlib.atomicUnit}`);

(async () => {
  const commonInteract = {};

  // SELLER
  if (role === "seller") {
    const sellerInteract = { ...commonInteract };
    // create new test acc with 100 tokens
    const acc = await stdlib.newTestAccount(iBalance);
    await showBalance(acc)
    const ctc = acc.contract(backend);
    await backend.Seller(ctc, sellerInteract);
    await showBalance(acc);
  }
  // BUYER
  else {
    const buyerInteract = { ...commonInteract };
  }
})();
