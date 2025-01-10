import './Card.css'
function Card(props) {
    const { name, protein, fat, calories, carbs } = props; // Destructuring các prop

    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Protein: {protein} g</p>
            <p>Fat: {fat} g</p>
            <p>Calories: {calories}</p>
            <p>Carbs: {carbs} g</p>
        </div>
    );
}

export default Card;
