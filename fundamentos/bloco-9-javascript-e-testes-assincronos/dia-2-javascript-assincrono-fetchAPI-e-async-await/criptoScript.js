const fetchCoins = async () => {
  const API_URL = `https://api.coincap.io/v2/assets`;

  const coins = await fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinList = document.getElementById('criptoContainer');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);
    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinList.appendChild(newLi);
  });
}

window.onload = () => setCoins();