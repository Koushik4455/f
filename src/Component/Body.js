import React from 'react'
import Product from './Product'

const Body = () => {
    return (
        <div>
            <div className="header">
                <div className='container'>
                    {/* Head Part */}
                    <div className='row mt-3 '>
                        <div className='col-md-4'>
                            <h6>Hello Shahrukh</h6>
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <input type='text' placeholder='Search Here' className='Input'  />
                            <div className="search-icon"><i class="bi bi-search"></i></div>
                        </div>
                    </div>
                    {/* Cards Part */}
                    <div className='row mt-5 card-res'>
                        <div className='col-ms-3 card-res1'>
                            <div className="card">
                                <i className="bi bi-currency-exchange body-img"></i>
                                <div className="card-content">
                                    <h3>Card Title</h3>
                                    <p>Card description or text goes here.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-ms-3 card-res1'>
                            <div className="card">
                                <i class="bi bi-building  body-img"></i>
                                <div className="card-content">
                                    <h3>Card Title</h3>
                                    <p>Card description or text goes here.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-ms-3 card-res1'>
                            <div className="card">
                                <i class="bi bi-database  body-img"></i>
                                <div className="card-content">
                                    <h3>Card Title</h3>
                                    <p>Card description or text goes here.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-ms-3 card-res1'>
                            <div className="card">
                                <i class="bi bi-lock  body-img"></i>
                                <div className="card-content">
                                    <h3>Card Title</h3>
                                    <p>Card description or text goes here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chart */}
                    <br />
                    <div className='row mt-5'>
                        <div className='col-md-8 '>
                            <img src='https://img.freepik.com/premium-vector/chart-graph-scheme-simply-color-editable-infographics-element-vector_627350-514.jpg?w=740' width="100%" />
                        </div>
                        <div className='col-md-4 p-5'>
                            <img src='https://img.freepik.com/free-vector/pie-chart-infographic-template_1130-49.jpg?w=740&t=st=1697221560~exp=1697222160~hmac=9e3909474f1be439be4ed5fc850fdc496d433391a903b32bd76f7f18c94a6dc6' width="100%" />
                            {/* // <img src='https://t3.ftcdn.net/jpg/06/13/68/14/240_F_613681425_ytNZq33UrL5KfJe8uR3WOzqEBBOyhhR1.jpg'/> */}

                        </div>
                    </div>
                    <br/>
                    <Product />

                </div>
            </div>
        </div>
    )
}

export default Body
