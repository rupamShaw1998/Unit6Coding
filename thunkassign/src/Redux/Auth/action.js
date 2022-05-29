export const ADDUSER = "ADDUSER";
export const SINGLEUSER = "SINGLEUSER";

export const addUser = (data) => {
    return {
        type: ADDUSER,
        payload: data
    }
}

export const singleUser = (data) => {
    return {
        type: SINGLEUSER,
        payload: data
    }
}