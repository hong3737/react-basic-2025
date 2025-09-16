import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [buyCoin, setBuyCoin] = useState({});
    const onSubmit = (event) => {
        event.preventDefault();
        const selectCoinIndex = document.getElementById("coin").value;
        const selectCoinInfo = coins[selectCoinIndex];
        const amount = document.getElementById("amount").value;

        setBuyCoin({
            name: selectCoinInfo.name,
            price: amount / selectCoinInfo.quotes.USD.price,
        });
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <form onSubmit={onSubmit}>
                        <input
                            type="number"
                            id="amount"
                            placeholder="Please enter the amount"
                        />
                        <select id="coin">
                            {coins.map((coin, index) => (
                                <option key={coin.id} value={index}>
                                    {coin.name} ({coin.symbol}) :
                                    {coin.quotes.USD.price} USD
                                </option>
                            ))}
                        </select>
                        <button>calc</button>
                    </form>
                    <h3>
                        You can buy
                        <span style={{ margin: "0 8px" }}>{buyCoin.name}</span>
                        <span>{buyCoin.price}</span>
                    </h3>
                </div>
            )}
        </div>
    );
}

export default App;
