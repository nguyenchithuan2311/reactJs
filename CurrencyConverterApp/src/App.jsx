import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [info, setInfo] = useState([]);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  const [options, setOptions] = useState([])
  const [amount, setAmount] = useState(0);
  const [res,setRes] = useState(0);

  useEffect(() => {
    // Lấy dữ liệu từ API
    Axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
      .then((res) => {
        setInfo(res.data[from]);
        setOptions(Object.keys(res.data[from])); // Cập nhật options sau khi nhận được dữ liệu
      })
      .catch(err => console.error('Error fetching currency data:', err));
  }, [from]);

  useEffect(()=>{
    console.log(amount)
    setRes(amount*info[to])
  },[amount,from,to,info])
  return (
    <>
      <h1>Currency converter</h1>
      <div className='container'>
      <div className='left'>
        <h2>Amount</h2>
        <input type='number' onChange={(e)=>setAmount(e.target.value)}></input>
      </div>

      <div className='mid'>
        <h2>From</h2>
        <Dropdown className='dropdown' options={options} onChange={(e)=>{
          setFrom(e.value)}} value={from} placeholder="From"></Dropdown>
      </div>

      <div className='right'>
        <h2>To</h2>
        <Dropdown className='dropdown' options={options} onChange={(e) => { setTo(e.value) }} value={to} placeholder="To"></Dropdown>
      </div>
      </div>
      <div>
        <button className='submit'>Submit</button>
      </div>
      <div>
        <h2 className='result'>Converted Amount: {res}</h2>
      </div>
    </>
  )
}

export default App
