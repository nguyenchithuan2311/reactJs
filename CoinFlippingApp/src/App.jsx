import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [totalFlips, setTotalFlip] = useState(0)
  const [totalHeads, setTotalHead] = useState(0)
  const [totalTails, setTotalTail] = useState(0)
  const [isShowTotal,setIsShowTotal] = useState(false)
  
  const imgURL = {
    head:'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg',
    tail: 'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
  }
  const [img, setImg] = useState(imgURL['head'])
  const handFlip = ()=>
  {
    const randomKey = Math.random() < 0.5 ? 'head' : 'tail';
    setImg(imgURL[randomKey])
    setTotalFlip(totalFlips=>totalFlips+1)
    if(randomKey=='head')
    {
      setTotalHead(totalHeads=>totalHeads+1)
    }
    else
    {
      setTotalTail(totalTails=>totalTails+1)
    }
    setIsShowTotal(true)
  }

  return (
    <>
      <h1>Let's flip a coin</h1>
      <img src={img} className='img-coin'></img>
      <button className='button-flip' onClick={handFlip}>Flip Me</button>
      {isShowTotal ? (<h2>Out of {totalFlips} flips, there have been {totalHeads} heads and {totalTails} tails</h2>):null}
      
    </>
  )
}

export default App
