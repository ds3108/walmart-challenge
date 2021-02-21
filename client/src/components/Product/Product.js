import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Product.scss'
import { formatNumberToPrice } from "../../helpers/string";
/**
    * Renders a <NavBar /> component according with the mockUp. Includes pulse animation with CSS keyframes.
    */
const Product = ({ info: { image, brand, id, description, price }, isPalyndrom }) => (
    <div className=" fade-in col-md-4 mt-15">
        <Card key={id} className="product-card">
            <Card.Img variant="top" src={`https://${image}`} />
            <Card.Body>
                <Card.Title><span className="product-brand">{brand}</span> <span className="product-desc">{description}</span></Card.Title>    
                    <div className="price-reference">{`Ref:(${id})`}</div>
                    <div>$ {formatNumberToPrice(price, isPalyndrom)}
                        {isPalyndrom && <div className="disccount">
                           <div className="disccount-value"><p>50%</p></div>
                        </div>
                        }
                    </div>
                    {isPalyndrom && <div><p className="old-price">$ {formatNumberToPrice(price)}</p></div>}
                <Button className="mt-15 btn-buy" disabled variant="primary">Agregar</Button>
            </Card.Body>
        </Card>
    </div>


);


export default Product;