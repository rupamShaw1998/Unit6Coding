import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getCountry } from "../Redux/country/action";

export const Country = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const countries = useSelector(store => store.country.country);
    console.log(countries);

    useEffect(() => {
        dispatch(getCountry())
    }, [])

    const addCountryHandler = () => {
        navigate('/add-country')
    }

    return (
        <>
            <button onClick={addCountryHandler}>ADD COUNTRY</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((e) => {
                        return (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.country}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>           
        </>
    )
}