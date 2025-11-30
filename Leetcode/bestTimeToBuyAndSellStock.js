/*
------TIME LIMIT EXCEED-----
*/
// var maxProfit = function(prices) {
//     let profit = 0
    
//     for (n in prices){
//         let len = prices.length-1
//         while(len > n){
//             if(prices[len]-prices[n]>profit){
//                 profit = prices[len]-prices[n]
//             }
//             len--
//         }
//     }
//     return profit
// };

const maxProfit = function(prices){
    let profit = 0
    let left = 0
    let right = 1

    while(right < prices.length){
        if(prices[right] <= prices[left]){
            left = right
        }
        else{
            profit = Math.max(profit, prices[right] - prices[left])
        }
        right++
    }
    return profit
}
console.log(maxProfit([7,1,5,3,9,4]));