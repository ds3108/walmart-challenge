import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Product.scss'
import { formatNumberToPrice } from "../../helpers/string";
/**
    * Renders a <NavBar /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const Product = ({ info: { image, brand, id, description, price } }) => (
    <div className="col-md-4 mt-15">
        <Card key={id} className="product-card">
            <Card.Img variant="top" src={`https://${image}`} />
            <Card.Body>
                <Card.Title><span className="product-brand">{brand}</span> <span className="product-desc">{description}</span></Card.Title>
                <Card.Text>
                    <div className="price-reference">{`Ref:(${id})`}</div>
                    <div>$ {formatNumberToPrice(price)}<div className="disccount"><p className="disccount-value">50%</p></div></div>
                </Card.Text>
                <Button className="btn-buy" variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    </div>


);


export default Product;