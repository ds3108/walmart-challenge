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
    const [isPalyndrom, setIsPalyndrom] = useState(false);
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(async () => {
        const { results, palyndromSearch, error } = await fetchHelper.getInfo(query);
        if (!error) {
            setProducts(results);
            setIsPalyndrom(palyndromSearch);
            setLoading(false);
        } else {
            setProducts([]);
            setLoading(false);
        }

    }, [loading]);


    const onChange = ({ target: { value } }) => setQuery(value);
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            searchProduct();
        }
    };
    const searchProduct = () => {
        if (!loading) {
            setLoading(true);
        }
    };
    return (
        <div className="App">
            <Navbar
                onChange={onChange}
                onKeyPress={onKeyPress}
                searchProduct={searchProduct}
                query={query}
            />
            {loading && <Loading />}
            {!loading && <div className="product-list">
                <div className="container">
                    <div className="row">

                        {products.map((product) => (
                            <Product key={product.id} info={product} isPalyndrom={isPalyndrom} />
                        ))}

                    </div>
                </div>

            </div>}
        </div>
    );

}

export default App;
