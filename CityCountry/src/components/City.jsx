import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityData, original, sorting, deleteCity } from '../Redux/city/action';
import { useNavigate, Link } from 'react-router-dom';

export const City = () => {
    const dispatch = useDispatch();
    var navigate = useNavigate();
    const cities = useSelector(store => store.city.city);
    console.log(cities);

    useEffect(() => {
        dispatch(getCityData());
    }, [])
    const addCityHandler = () => {
        navigate('/add-city')
    }
    const sortHandler = (e) => {
        if(e.target.value=="asc")
            dispatch(sorting(1))
        else if(e.target.value=="dec")
            dispatch(sorting(-1))
        else
            dispatch(original())
    }

    return (
        <div>
            <input type="text" onChange={(e) => setFilter(e.target.value)} placeholder='Filter by Country'/>
            <button onClick={addCityHandler}>ADD CITY</button>
            <select onChange={sortHandler} name="" id="sort">
                <option value="sel">--select--</option>
                <option value="asc">Low to High</option>
                <option value="dec">High to Low</option>
            </select>                
            <table border="1" >
                <thead >
                    <tr>
                        <td>Serial No</td>
                        <td>Country Name</td>
                        <td>City</td>
                        <td>Population</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>

                <tbody >
                    {cities.map((e,i)=>{
                        return (
                            <tr>
                                <td>{i+1}</td>
                                <td>{e.Country}</td>
                                <td>{e.City}</td>
                                <td>{e.Population}</td>
                                <td><Link to={`/update-city/${e.id}`}><button>edit</button></Link></td>
                                <td><button onClick={() => dispatch(deleteCity(e.id))}>delete</button></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}