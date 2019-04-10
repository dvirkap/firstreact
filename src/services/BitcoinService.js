import axios from 'axios'

export default {
    getRate,
    getMarketPrice
}

function getRate(coins) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`).then((res) => {
        return res.data;

    })
}
getMarketPrice()
function getMarketPrice() {
    if(localStorage.getItem(!'marketprice')) {
        return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true').then((res) => {
            console.log(res.data);
            var marketPrice = res.data
            localStorage.setItem('marketprice',JSON.stringify(marketPrice))
        })
    }
    else {
        console.log('already got key');
    }
}