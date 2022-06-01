import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateCity } from "../Redux/city/action";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateCity = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    console.log("id:", id);

    const [text, setText] = useState({
        Country: "",
        City: "",
        Population: ""
    })

    const updation = (e) => {
        setText({
            ...text,
            [e.target.id]: e.target.value
        })
    }
    const editCity = () => {
        dispatch(updateCity(text, id));
        navigate('/');
    }

    return (
        <>
            <input onChange={updation} id="Country" type="text" placeholder="enter country" />
            <input onChange={updation} id="City" type="text" placeholder="enter city" />
            <input onChange={updation} id="Population" type="text" placeholder="enter population" />
            <button onClick={editCity}>Save Changes</button>
        </>
    )
}