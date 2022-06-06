import { useEffect, useState } from "react";
import axios from 'axios';

export const Products = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/product").then(({data}) => {
            // console.log(data);
            setData(data.product);
        })
    }, [])

    return (
        <>
            <h1>Ecommerce</h1>
            <div id="container">
                {data.map(e => {
                    return (
                        <div>
                            <img src={e.productPic} alt="" />
                            <h3>{e.productName}</h3>
                            <h4>Rs. {e.priceOfProduct}</h4>
                            <h3>{e.productBrand}</h3>
                        </div>                     
                    )                   
                })}
            </div>
        </>
    )
}
