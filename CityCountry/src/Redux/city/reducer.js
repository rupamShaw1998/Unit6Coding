import { ADD_CITY, FILTER_DATA, ORIGINAL, SORTING } from "./action";

const init = {
    city: []
}

export const addCityReducer = (store = init, { type, payload }) => {
    switch(type)
    {
        case ADD_CITY:
            return { ...store, city: payload }
        case SORTING:
            return { ...store, city: [...store.city].sort((a,b) => payload*(a.Population-b.Population)) }
        case ORIGINAL:
            return { ...store, city: [...store.city].sort((a,b) => a.id-b.id) }
        case FILTER_DATA:
            return { ...store, city: store.city.filter(e => e.Country.includes(payload)) }
        default:
            return store
    }
}