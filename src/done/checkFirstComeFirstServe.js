// Returns a boolean
function checkFirstComeFirstServe(takeOutOrders, dineInOrders, servedOrders) {
  let ti = 0, di = 0;

  for (const item of servedOrders) {
    if (item === takeOutOrders[ti] ) {
      ti += 1;
    } else if (item === dineInOrders[di]) {
      di += 1;
    } else {
      return false;
    }
  }

  return true;
}

let takeOutOrders = [1, 3, 5]
let dineInOrders = [2, 4, 6]
let servedOrders = [1, 2, 4, 6, 5, 3]
console.log(checkFirstComeFirstServe(takeOutOrders, dineInOrders, servedOrders))

takeOutOrders = [17, 8, 24]
dineInOrders = [12, 19, 2]
servedOrders = [17, 8, 12, 19, 24, 2]
console.log(checkFirstComeFirstServe(takeOutOrders, dineInOrders, servedOrders))
