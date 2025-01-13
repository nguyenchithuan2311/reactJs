import './App.css'
function Row(props)
{
    return(
        
    <div className='items'>
        <h3 className='LapName'>Lap {props.Order}</h3>
        <h3>{props.Time}</h3>
        <h3>{props.TotalTime}</h3>
    </div>
    
    )
}

export default Row;