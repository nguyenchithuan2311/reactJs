import './Form.css';
import Card from './Card.jsx';
import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState(0);
    const [items, setItems] = useState([]); // Lưu danh sách items

    const handleAddItem = () => {
        // Thêm item mới vào danh sách
        setItems([
            ...items,
            { name, protein, fat, calories, carbs }
        ]);

        // Reset các trường nhập
        setName("");
        setProtein(0);
        setFat(0);
        setCalories(0);
        setCarbs(0);
    };

    const handleClearAll = () => {
        setItems([]); // Xóa tất cả các items
    };

    const sumCalories = items.reduce((totalClories, currentValue)=>{
        return totalClories+currentValue.calories;
    },0) 

    return (
        <>
            <h1 className='title'>GeeksforGeeks Nutrition Meter</h1>
            <div className="container">
                <div className='column'>
                    <input
                        className='field'
                        placeholder='Item Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='field'
                        placeholder='Protein (g)'
                        type="number"
                        value={protein}
                        onChange={(e) => setProtein(Number(e.target.value))}
                    />
                    <input
                        className='field'
                        placeholder='Fat (g)'
                        type="number"
                        value={fat}
                        onChange={(e) => setFat(Number(e.target.value))}
                    />
                </div>

                <div className='column'>
                    <input
                        className='field'
                        placeholder='Calories'
                        type="number"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                    <input
                        className='field'
                        placeholder='Carbs (g)'
                        type="number"
                        value={carbs}
                        onChange={(e) => setCarbs(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className='container-button'>
                <button className='AddItem' onClick={handleAddItem}>Add Item</button>
                <button className='ClearAll' onClick={handleClearAll}>Delete All</button>
            </div>

            <div className="items-list">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        protein={item.protein}
                        fat={item.fat}
                        calories={item.calories}
                        carbs={item.carbs}
                    />
                ))}
            </div>

            <div className='summary'>
                    <>
                    <h2 >Total Calories: {items.reduce((totalCalories, item) => totalCalories + Number(item.calories || 0), 0)}</h2>
                    <h2 >Total Protein: {items.reduce((totalProteins, item) => totalProteins + Number(item.protein || 0), 0)}</h2>
                    <h2 >Total Carbs: {items.reduce((totalCarbs, item) => totalCarbs + Number(item.carbs || 0), 0)}</h2>
                    <h2 >Total Fat: {items.reduce((totalFat, item) => totalFat + Number(item.fat || 0), 0)}</h2>
                    </>
            </div>
        </>
    );
}

export default Form;
