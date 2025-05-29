import React, { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setAllCoin(data);
    } catch (err) {
      console.error('Error fetching coins:', err);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contexValue = {
    allCoin,
    currency,
    setCurrency
  };

  return (
    <CoinContext.Provider value={contexValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
