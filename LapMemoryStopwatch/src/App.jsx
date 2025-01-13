import { useEffect, useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Row  from './Row';
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [hour,setHour] = useState(0);
  const [minute,setMinute] = useState(0);
  const [second, setSecond] =useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSecond(prevSecond => {
          if (prevSecond >= 59) {
            setMinute(prevMinute => {
              if (prevMinute >= 59) {
                setHour(prevHour => prevHour + 1);
                return 0;
              }
              return prevMinute + 1;
            });
            return 0;
          }
          return prevSecond + 1;
        });
      }, 1000); // 1000ms = 1s
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  
  const handleStart = () => {
    setIsRunning(true);
 
};
const handlePause = () =>{
  setIsRunning(false)
}

const handleReset =()=>{
  setHour(0)
  setMinute(0)
  setSecond(0)
}

const handleLap=()=>
{
  setItems((prevItems) => {
    const lastItem = prevItems[prevItems.length - 1];
    
    const totalTimeCurrent = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    
    let timeDifference = totalTimeCurrent; // Default to TotalTime if it's the first item.
    
    if (lastItem) {
      const [lastHour, lastMinute, lastSecond] = lastItem.TotalTime.split(':').map(Number);
      const [currentHour, currentMinute, currentSecond] = totalTimeCurrent.split(':').map(Number);
  
      
      const lastTotalSeconds = lastHour * 3600 + lastMinute * 60 + lastSecond;
      const currentTotalSeconds = currentHour * 3600 + currentMinute * 60 + currentSecond;
  
      
      const diffSeconds = currentTotalSeconds - lastTotalSeconds;

      const diffHour = Math.floor(diffSeconds / 3600);
      const diffMinute = Math.floor((diffSeconds % 3600) / 60);
      const diffSecond = diffSeconds % 60;
  
      timeDifference = `${String(diffHour).padStart(2, '0')}:${String(diffMinute).padStart(2, '0')}:${String(diffSecond).padStart(2, '0')}`;
    }
  
    return [
      ...prevItems,
      {
        Order: prevItems.length + 1,
        Time: timeDifference,
        TotalTime: totalTimeCurrent,
      },
    ];
  });
  
  console.log(items)
}
  return (
    <>
      <div className='background'>
        <div className='clock'>
          <h2>{String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")}:{String(second).padStart(2, "0")}</h2>
        </div>
        <div className='container-button'>
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleLap}>Lap</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className='title'>
          <h2 className='Lap'>Lap</h2>
          <h2 className='Time'>Time</h2>
          <h2 className='TotalTime'>Total Time</h2>
        </div>
        <div className='container-items'>
        {items.map((item, index) => (
  <Row
    key={index} 
    Order={item.Order} 
    Time={item.Time} 
    TotalTime={item.TotalTime} 
  />
))}
</div>
      </div>
    </>
  )
}

export default App
