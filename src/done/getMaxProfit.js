function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
        throw new Error('Need two values in stock prices.')
    }

    let minPrice = Math.min(stockPrices[0], stockPrices[1]);
    let maxProfit = stockPrices[1] - stockPrices[0];

    for (let i = 2; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i];
        const potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(price, minPrice)
    }

    return maxProfit;
}
