import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(data=> setProducts(data))
    },[])
    console.log(products)

    const cards = products.map(product =>
        (
            <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </div>
          )
    )
  return (
    <div>
        <div className="row">
            {cards}
        </div>
    </div>
  )
}

export default Product