import React, { useEffect, useState } from 'react';
import { ArrowUp, ArrowDown } from "lucide-react";
import axios from 'axios';

const MarketSection = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false
            }
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <section id="market" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-lime-400">Buy crypto instantly</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track prices in real-time and trade your favorite cryptocurrencies with ease
          </p>
        </div>

        {/* Buy Box (static example) */}
        <div className="rounded-2xl border border-gray-800 p-6 max-w-4xl mx-auto mb-12 bg-gray-800">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {['BTC', 'ETH', 'USDT'].map((coin) => (
              <button 
                key={coin}
                className="flex items-center justify-center p-4 rounded-lg border border-gray-800 hover:border-lime-400 transition-all bg-gray-700"
              >
                <span className="text-lg font-medium text-lime-400">{coin}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <input
                type="text"
                className="block w-full pl-8 pr-12 py-3 rounded-lg border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 text-white bg-gray-700"
                placeholder="0.00"
                defaultValue="500.00"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="text-gray-500">USD</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-center px-4 text-white">=</div>
            <div className="relative flex-1">
              <input
                type="text"
                className="block w-full px-3 py-3 rounded-lg border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-1 focus:ring-lime-400 text-white bg-gray-700"
                placeholder="0.00"
                defaultValue="0.00786"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="text-gray-500">BTC</span>
              </div>
            </div>
          </div>

          <button 
            className="w-full py-6 text-lg font-medium rounded-lg text-black bg-lime-400 transition-all hover:opacity-90"
          >
            Buy Now
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Send money instantly - no bank account required
          </p>
        </div>

        {/* Market Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Asset</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Price</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Change</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Volume</th>
                <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Trade</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr 
                  key={coin.id} 
                  className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors bg-gray-800"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-3" />
                      <div>
                        <div className="font-medium text-white">{coin.name}</div>
                        <div className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right py-4 px-6 font-medium text-lime-400">${coin.current_price.toLocaleString()}</td>
                  <td className={`text-right py-4 px-6 font-medium ${coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    <div className="flex items-center justify-end">
                      {coin.price_change_percentage_24h >= 0 ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </div>
                  </td>
                  <td className="text-right py-4 px-6 text-gray-400">${Number(coin.total_volume).toLocaleString()}</td>
                  <td className="text-right py-4 px-6">
                    <button 
                      className="px-4 py-1.5 text-sm rounded-md border border-gray-700 hover:border-lime-400 hover:text-lime-400 transition-colors text-gray-300"
                    >
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <button className="text-lime-400 hover:text-lime-300 transition-colors">
            View all markets →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
