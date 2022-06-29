// https://reachsh.notion.site/Week-2-Bets-and-Wagers-594cdddc810a481dbd4809f31345720f
"reach 0.1";

const commonInteract = {};
const sellerInteract = { ...commonInteract };
const buyerInteract = { ...commonInteract };

export const main = Reach.App(() => {
  const S = Participant("Seller", sellerInteract);
  const B = Participant("Buyer", buyerInteract);
  init();

  exit();
});


