import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Product = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredData = data.filter(item =>
        // item.ProductName.toLowerCase().includes(search.toLowerCase())
        Object.values(item).some(value =>
            value && typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
          )

    );


    useEffect(() => {
        axios.get('http://localhost:8000/Products')
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])
    // console.log("hkl",data)
    return (
        <div>
            <div className='conatiner Product'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4>Product Sell</h4>
                        <div className='Product-main'>
                            <input type='text' placeholder='Search' value={search}
                                onChange={handleInputChange} className='mr-3 product-input-box'></input>

                            <select className='product-option'>
                                <option value="0">past 30 days</option>
                                <option value="1">past 20 days</option>
                                <option value="2">past 10 days</option>
                            </select>
                        </div>
                        <br />
                        {/*Fetching api */}
                        <div className='table-responsice'>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td scope="col">Product Name</td>
                                            <td scope="col" className='table-side'>Stock</td>
                                            <td scope="col" className='table-side'>Price</td>
                                            <td scope="col" className='table-side'>Total Sales</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData?.map((item) => {
                                            return (

                                                <tr>

                                                    <th scope='row'>{item.ProductName}</th>
                                                    <td className='table-side'>{item.Stock}</td>
                                                    <th className='table-side'>{item.Price}</th>
                                                    <td className='table-side'>{item.Total}</td>
                                                </tr>)

                                        })}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product
