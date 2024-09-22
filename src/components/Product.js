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
            <div className="col-md-3" style={{marginBottom:'10px'}}>
            <Card style={{ width: '18rem' }} key={product.id} className="h-100">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.Title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
              </Card.Body>

              <Card.Footer>
              <Button variant="primary">Add to cart</Button>
              </Card.Footer>
            </Card>
            </div>
          )
    )
  return (
    <div>
        <h1>Product Dashboard</h1>
        <div className="row" style={{margin:'10px'}}>
            {cards}
        </div>
    </div>
  )
}

export default Product