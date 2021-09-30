import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Card, CardDeck, Container, Col } from 'react-bootstrap';
import moment from "moment";

function getStyle(menu) {
  let color = menu.isVegetarian ? 'lightseagreen' : 'lightcoral';
  return { backgroundColor: color, color: 'white', height:"130px"}
}

const MenuToday = (props) => {
  const [datafromDB, setdatafromDB] = useState([])
  const autodate = new Date();
  let index = props.canteenId + moment(autodate).format("YYYYMMDD");
  // console.log(index)
  let hardcodedindex = props.canteenId + '20210929'
  useEffect(() => {
    apiCall()
  },[props.canteenId])

  const apiCall = () => {
    let uri = 'http://ec2-13-233-64-208.ap-south-1.compute.amazonaws.com:6080/smt/'

    let fetchTask = fetch(encodeURI(uri + props.canteenId))
    .then(response => {
        console.log("statuscode: " + response.status);
        if (response.status === 404) {
            throw new Error('No information found');
        } else {
            return response.text();
        }
    })
    .then(text => {
      try {
          setdatafromDB(JSON.parse(text))
          console.log(datafromDB[hardcodedindex])
      } catch (err) {
        throw new Error('Error parsing response: ' + err);
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  function getMenus(canteenId)  {
    
  
    let staticData = [
      {
        "menuId" : "INBA20210929",
        "dish1name": "Veg Biryani",
        "dish1ImgUrl": "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Veg+Biryani.webp",
        "dish1isFavorite": false,
        "dish1isVegetarian": true,
        "dish2name": "Chicken Biryani",
        "dish2ImgUrl": "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Chicken+biryani.webp",
        "dish2isFavorite": false,
        "dish2isVegetarian": false
      },
      {
        "menuId" : "DKBB20210929",
        "dish1name": "Pasta with vegetables",
        "dish1ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Pasta+with+Sausage.webp',
        "dish1isFavorite": true,
        "dish1isVegetarian": true,
        "dish2name": "Chicken Curry",
        "dish2ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Chicken+curry.webp',
        "dish2isFavorite": false,
        "dish2isVegetarian": false
      },
      {
        "menuId" : "DKHK20210929",
        "dish1name": " Dal Makhani",
        "dish1ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/dal+makhani.webp',
        "dish1isFavorite": true,
        "dish1isVegetarian": true,
        "dish2name": "Prawn fry",
        "dish2ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Prawn+fry.webp',
        "dish2isFavorite": false,
        "dish2isVegetarian": false
      },
      {
        "menuId" : "DKHT20210929",
        "dish1name": " Pasta with vegetables",
        "dish1ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Pasta+with+Sausage.webp',
        "dish1isFavorite": false,
        "dish1isVegetarian": true,
        "dish2name": "Pork cutlet",
        "dish2ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Pork+cutlet.webp',
        "dish2isFavorite": false,
        "dish2isVegetarian": false
      },
      {
        "menuId" : "LTVI20210929",
        "dish1name": " Pasta with vegetables",
        "dish1ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Pasta+with+Sausage.webp',
        "dish1isFavorite": true,
        "dish1isVegetarian": true,
        "dish2name": "Spaghetti with Meatballs",
        "dish2ImgUrl": 'https://diwi-dfv.s3.ap-south-1.amazonaws.com/Spaghetti+and+meatballs.webp',
        "dish2isFavorite": true,
        "dish2isVegetarian": false
      }
    ]
  
    let adjustedData = staticData
      .filter(c => c.menuId.indexOf(canteenId) >= 0)
      .map(c => 
        [
          { 
            "name" : c.dish1name,
            "imgUrl" : c.dish1ImgUrl,
            "isFavorite" : c.dish1isFavorite,
            "isVegetarian" : c.dish1isVegetarian,
          },
          { 
            "name" : c.dish2name,
            "imgUrl" : c.dish2ImgUrl,
            "isFavorite" : c.dish2isFavorite,
            "isVegetarian" : c.dish2isVegetarian,
          }
        ]
      )
  
    // console.log(adjustedData)
  
    return adjustedData[0]  
  }
  
  return (
    <Container fluid style={{ marginTop: '5px', width: '90%' }}>
      <Row >
        <Col lg="12" sm="12" >
          <CardDeck>
            {getMenus(props.canteenId, setdatafromDB, datafromDB).map(m =>
            <Card>
              <Card.Img variant="top" src={m.imgUrl} style={{height:"400px"}} />
              <Card.Body style={getStyle(m)}>
                <Card.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{m.name}</Card.Title>
                {m.isFavorite ? <Link className="button cta" to="/Reports" style={{ backgroundColor: '#003755', fontSize: '13px' }}>Remove from favorites</Link> :
                <Link className="button cta" to="/Reports" style={{ backgroundColor: '#003755', fontSize: '13px' }}>Add to favorites</Link>}
              </Card.Body>
            </Card>
            )}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  )
}


export default MenuToday;