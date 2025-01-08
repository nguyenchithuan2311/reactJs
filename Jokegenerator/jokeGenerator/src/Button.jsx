import { useState } from "react"


function Button(){
    var [joke,setJoke]=useState("");
    async function GetDate()
{
    const data = await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
    setJoke(data.joke)
}
    return (
        <>
        <button className="Thuan" onClick={GetDate}>Click to generate a joke </button>
        <h3>{joke}</h3>
        </>
    )
}



export default Button