import { useState } from "react"
import { useDispatch } from "react-redux"
import { postCountry } from "../Redux/country/action";
import { useNavigate } from "react-router-dom";

export const AddCountry = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [text, setText] = useState({
        country: ""
    })

    const insertion = (e) => {
        setText({
            ...text,
            [e.target.id]: e.target.value
        })
    }
    const insertCountry = () => {
        dispatch(postCountry(text));
        navigate('/');
    }

    return (
        <>
            <input onChange={insertion} id="country" type="text" placeholder="enter country" />
            <button onClick={insertCountry}>Add Country Details</button>
        </>
    )
}