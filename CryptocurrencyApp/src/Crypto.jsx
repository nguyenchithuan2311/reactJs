import './App.css'
function Crypto(props)
{
    return (
    <div className="container-row-crypto">
        <h3 className='rank'>{props.Rank}</h3>
        <img src={props.Img} className='img-crypto'/>
        <h3 className='name'>{props.Name}</h3>
        <h3 className='symbol'>{props.Symbol}</h3>
        <h3 className='market-cap'>{props.MarketCap}</h3>
        <h3 className='price'>{props.Price}</h3>
        <h3 className='available-supply'>{props.AvailableSupply}</h3>
        <h3 className='volume'>{props.Volume}</h3>
    </div>
    )

}
export default Crypto;