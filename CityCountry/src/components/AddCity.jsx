import { useState } from "react"
import { useDispatch } from "react-redux"
import { postCity } from "../Redux/city/action";
import { useNavigate } from "react-router-dom";

export const AddCity = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [text, setText] = useState({
        Country: "",
        City: "",
        Population: ""
    })

    const insertion = (e) => {
        setText({
            ...text,
            [e.target.id]: e.target.value
        })
    }
    const insertCity = () => {
        dispatch(postCity(text));
        navigate('/');
    }

    return (
        <>
            <input onChange={insertion} id="Country" type="text" placeholder="enter country" />
            <input onChange={insertion} id="City" type="text" placeholder="enter city" />
            <input onChange={insertion} id="Population" type="text" placeholder="enter population" />
            <button onClick={insertCity}>Add City Details</button>
        </>
    )
}