import React from 'react';
// import { Link } from 'react-router-dom';
import { Row, Card, CardDeck, Container, Col } from 'react-bootstrap';

function getMenuPrDay() {
    return [
      {
        "day": "September 30th",
        "dishes": [
          { "name": "Chicken curry" },
          { "name": "Dal makhani" }
        ]
      },
      {
        "day": "October 1st",
        "dishes": [
          { "name": "Fish curry" },
          { "name": "Gobi fry" }
        ]
      },
      {
        "day": "Oktober 4th",
        "dishes": [
          { "name": "Prawn fry" },
          { "name": "Veg. biryani" }
        ]
      },
      {
        "day": "Oktober 5th",
        "dishes": [
          { "name": "Mutton curry" },
          { "name": "Pasta" }
        ]
      }
    ];
  }


const MenuFuture = () => {
    return (
        <Container fluid style={{ marginTop: '5px', width: '90%' }}>
            <Row >
                <Col lg="12" sm="12" >
                    <CardDeck>
                        {getMenuPrDay().map(m =>
                        <Card>
                            <Card.Body style={{ backgroundColor: 'lightseagreen', color: 'white' }}>
                                <Card.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{m.day}</Card.Title>
                                {m.dishes.map(dish => 
                                    <p>{dish.name}</p>
                                )}
                            </Card.Body>
                        </Card>
                        )}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    )
}


export default MenuFuture;