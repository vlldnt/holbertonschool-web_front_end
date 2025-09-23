const stock = { macbook: 2, iphone: 4 };

function processPayment(itemName) {
  const lowerItem = itemName.toLowerCase();
  stock[lowerItem] -= 1;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  const lowerItem = itemName.toLowerCase();
  console.log(`Verifying the stock of ${itemName}`);

  if (!(lowerItem in stock)) {
    console.log(`We don't sell ${itemName}`);
    console.log("Payment is not being processed");
    return;
  }

  if (stock[lowerItem] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

console.log("Please enter the item you would like to purchase (Macbook, iPhone):");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (!input) {
    console.log("No item entered");
  } else {
    processOrder(input, processPayment, processError);
  }
  process.stdin.pause();
});
