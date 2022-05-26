import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser, singleUser } from "../Redux/Auth/action";

export const Register = () => {
    const User = useSelector((store) => store.user.user);
    // console.log(User);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    });
    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        })
    }
    const payload = user;
    const register = (e) => {
        axios.post("http://localhost:8000/user", payload);
        dispatch(singleUser(payload));
        dispatch(addUser(payload));
        // console.log(payload);
    }

    return (
        <div>
            <input type="text" id="name" placeholder="enter name" onChange={handleInput} />
            <input type="email" id="email" placeholder="enter email" onChange={handleInput} />
            <input type="password" id="password" placeholder="enter password" onChange={handleInput} />
            <input type="password" id="confirm" placeholder="confirm password" onChange={handleInput} />
            <input type="submit" onClick={register} />
        </div>
    )
}