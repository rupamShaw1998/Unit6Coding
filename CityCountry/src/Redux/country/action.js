import axios from "axios";

export const ADD_COUNTRY = "ADD_COUNTRY";

export const addCountry = (data) => {
    return {
        type: ADD_COUNTRY,
        payload: data
    }
}

export const getCountry = () => async(dispatch) => {
    axios.get("http://localhost:8080/country").then(({data}) => {
        dispatch(addCountry(data))
    })
}
export const postCountry = (country) => async(dispatch) => {
    axios.post("http://localhost:8080/country", country)
}