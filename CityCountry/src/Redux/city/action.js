import axios from "axios";


export const ADD_CITY = "ADD_CITY";
export const SORTING = "SORTING";
export const ORIGINAL = "ORIGINAL";
export const FILTER_DATA = "FILTER_DATA";

export const addCity = (data) => {
    return {
        type: ADD_CITY,
        payload: data
    }
}
export const sorting = (data) => {
    return {
        type: SORTING,
        payload: data
    } 
}
export const original = (data) => {
    return {
        type: ORIGINAL,
        payload: data
    } 
}
export const filterData = (data) => {
    return {
        type: FILTER_DATA,
        payload: data
    } 
}

export const getCityData = () => async(dispatch) => {
    axios.get("http://localhost:8080/cities").then(({data}) => {
        dispatch(addCity(data));
    })
}
export const postCity = (city) => async(dispatch) => {
    axios.post("http://localhost:8080/cities", city)
}
export const deleteCity = (id) => async(dispatch) => {
    axios.delete(`http://localhost:8080/cities/${id}`).then(()=>{
        dispatch(getCityData())
    }) 
}
export const updateCity = (city, id) => async(dispatch) => {
   axios.patch(`http://localhost:8080/cities/${id}`, city);
}