import React, { useState, useEffect } from "react";
import Loading from "./components/Loading/loading"
import Navbar from "./components/Navbar/NavBar"
import Product from "./components/Product/Product"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import fetchHelper from "./helpers/fetch-helper";
import { isPalindrome, formatNumberToPrice } from "./helpers/string";


const App = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(async () => {

        const data = await fetchHelper.getInfo();
        if (data) {
            setProducts(data);
            setLoading(false);
        } else {
            setProducts([]);
            setLoading(false);
        }

    }, []);

    // // Go to API and check testAPI route for a response
    // const callAPI = () => {
    //     fetch("http://localhost:9000/testAPI")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    // // Go to API and check testDB route for a response
    // callDB = () => {
    //     fetch("http://localhost:9000/testDB")
    //         .then(res => res.text())
    //         .then(res => this.setState({ dbResponse: res }))
    //         .catch(err => err);
    // }
    return (
        <div className="App">
           <Navbar />
            {loading && <Loading />}
            <div className="product-list">
                <div className="container">
                    <div className="row">

                        {products.map((product) => (
                            <Product  info={product}/>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );

}

export default App;
