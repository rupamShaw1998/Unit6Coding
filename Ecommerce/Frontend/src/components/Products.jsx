import { useEffect, useState } from "react";
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("1");
    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [productBrand, setProductBrand] = useState([]);
    const [total, setTotal] = useState(null)

    useEffect(() => {
        axios({
            url:"http://localhost:5000/product",
            method :'GET',
            params: {
                page,
                sort,
                productBrand
            }
        }).then(({data}) => {
            // console.log(data)
            setData(data.product)
            setTotal(data.totalPages)
        }
        )
    }, [page, sort, productBrand])

    useEffect(() => {
        setParams({
            sort,
            page,
            productBrand
        })
    }, [page, sort, productBrand, setParams])

    return (
        <>
            <h1>Ecommerce</h1>
            <button disabled={page==1} onClick={() => setPage(page-1)}>prev</button>
            <button disabled={page==total} onClick={() => setPage(page+1)}>next</button>
            <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                <option value="1">asc</option>
                <option value="-1">dec</option>
            </select>
            <select onChange={(e) => setProductBrand(e.target.value)}>               
                <option value="">filter By Brand</option>
                <option value="SkinCeuticals">SkinCeuticals</option>
                <option value="Sulwhasoo">Sulwhasoo</option>
                <option value="Medik8">Medik8</option>
                <option value="EltaMD">EltaMD</option>
            </select>
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
