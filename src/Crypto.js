import React from 'react'
import { useEffect, useState } from 'react';
import './Crypto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Crypto = () => {
  const [coins, setCoins] = useState([])
  const axios = require('axios').default

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=250&page=1&sparkline=false')
    .then(res => setCoins(res.data))
    .catch(err => console.log(err))
  }, [])

  const bitcoin = coins.filter(coin => coin.id === 'bitcoin')
  const ethe = coins.filter(coin => coin.id === 'ethereum')
  const slp = coins.filter(coin => coin.symbol === 'slp')

  const links = (e) => {
    const link = e.target.innerText.toLowerCase()
    if(link === 'bitcoin'){
      window.open("https://www.coingecko.com/en/coins/bitcoin")
    } else if(link === 'ethereum'){
      window.open("https://www.coingecko.com/en/coins/ethereum")
    } else {
      window.open("https://www.coingecko.com/en/coins/smooth-love-potion")
    }
  }

  return (
    <div className='coinsCon'>
      <div>
        {bitcoin.map(coin => (
          <div key={coin.symbol} className='coinsConCon'>
            <h3 onClick={links}>{coin.name}</h3>
            <div className='coins'>
              <p>₱{coin.current_price.toLocaleString()}</p>
              <p style={{color: coin.price_change_percentage_24h < 0 ? 'red' : '#00ff22'}}>{coin.price_change_percentage_24h.toFixed(2)}%{coin.price_change_percentage_24h < 0 ? (<FontAwesomeIcon icon={faCaretDown} />) : (<FontAwesomeIcon icon={faCaretUp} />)}</p>
            </div>
        </div>
        ))}
      </div>
      <div>
        {ethe.map(coin => (
          <div key={coin.symbol} className='coinsConCon'>
            <image src={coin.image} alt='crypto' />
            <h3 onClick={links}>{coin.name}</h3>
            <div className='coins'>
              <p>₱{coin.current_price.toLocaleString()}</p>
              <p style={{color: coin.price_change_percentage_24h < 0 ? 'red' : '#00ff22'}}>{coin.price_change_percentage_24h.toFixed(2)}%{coin.price_change_percentage_24h < 0 ? (<FontAwesomeIcon icon={faCaretDown} />) : (<FontAwesomeIcon icon={faCaretUp} />)}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {slp.map(coin => (
          <div key={coin.symbol} className='coinsConCon'>
            <h3 onClick={links}>{coin.symbol.toUpperCase()}</h3>
            <div className='coins'>
              <p>₱{coin.current_price.toLocaleString()}</p>
              <p style={{color: coin.price_change_percentage_24h < 0 ? 'red' : '#00ff22'}}>{coin.price_change_percentage_24h.toFixed(2)}%{coin.price_change_percentage_24h < 0 ? (<FontAwesomeIcon icon={faCaretDown} />) : (<FontAwesomeIcon icon={faCaretUp} />)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crypto