import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')
  const [isShow, setIsShow] = useState(false)
  const [lyrics, setLyrics] =useState('')
  const url = 'https://api.lyrics.ovh/v1/'
  const handleSearch = ()=>{
    Axios.get(url+artist+'/'+song).then(res => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    })
    if(lyrics!='')
    {
      setIsShow(true)
    }
  }
 
  return (
    <>
      <h2 className='title'>Lyric Finder</h2>
      <div className='container-search'>
        <input placeholder='Artists name' onChange={(e)=>{setArtist(e.target.value)}}></input>
        <input placeholder='Song name' onChange={(e) => setSong(e.target.value)}></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      <hr></hr>
      {isShow ? (<pre>{lyrics}</pre>) : null}
      
    </>
  )
}

export default App
