import { useState, useEffect } from 'react'
import Axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Crypto from './Crypto.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState([])
  const [prevPage, setPrevPage] = useState(false)
  const [nextPage, setNextPage] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://openapiv1.coinstats.app/coins',
      params: {page: pageNumber.toString(), limit: '20', currency: 'usd'},
      headers: {
        accept: 'application/json',
        'X-API-KEY': '3iNLrEwLf/0lSJcwUVahO1zdho1kUcggDDKfann0v/4='
      }
    };
    
    axios
      .request(options)
      .then(res => {setData(res.data.result)
        setNextPage(res.data.meta.hasNextPage)
        setPrevPage(res.data.meta.hasPreviousPage)
        setPageNumber(res.data.meta.page)
      })
      .catch(err => console.error(err));
    
  }, [pageNumber])

  const handleNextPage = () => {
    setPageNumber(currentPage => (currentPage+1))
  }

  const handlePrevPage = () => {
    setPageNumber(currentPage => (currentPage-1))
  }
  return (
    <>
      <h1>All Cryptocurrencies</h1>
      <div className='container-header'>
        <h2>Rank</h2>
        <h2>Name</h2>
        <h2>Symbol</h2>
        <h2>Market Cap</h2>
        <h2>Price</h2>
        <h2>Available Supply</h2>
        <h2 className='volume-title'>Volume(24hrs)</h2>
      </div>
      {data.map((value,index)=>{
        return <Crypto  key={index} Rank={value.rank} Img = {value.icon} Symbol= {value.symbol} Name={value.name}
        MarketCap = {value.marketCap}
        Price = {value.price}
        AvailableSupply = {value.availableSupply}
        Volume= {value.volume}>
        </Crypto>
      })}
      <button className="prev" onClick={handlePrevPage} disabled={!prevPage}>Prev</button>
      <button className='page-number'>{pageNumber}</button>
      <button className="next" onClick={handleNextPage} disabled={!nextPage}>Next</button>
    </>
  )
}

export default App
