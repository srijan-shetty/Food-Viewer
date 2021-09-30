import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBTable } from "mdbreact";
import { Card,  CardDeck } from 'react-bootstrap';
import classes from "./Buddies.module.css";

function getBuddiesMenu() {
  return [
    {
      "Name": "Deval Shah",
      "Message": "I Crave for Biryani Today.",
      "image" : "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Chicken+biryani.webp",
      "availibilty" : "Coming Today for Lunch at 13:00 IST",
      "Color" : "green"
    },
    {
      "Name": "Thomas Bagh",
      "Message": "I Crave for Pasta Today.",
      "image" : "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Pasta+with+Sausage.webp",
      "availibilty" : "Coming Today for Lunch at 14:00 IST",
      "Color" : "green"
    },
    
    {
      "Name": "Giedrius Dzekunsas",
      "Message": "I Crave for Spaghetti.",
      "image" : "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Spaghetti+and+meatballs.webp",
      "availibilty" : "Coming Today for Lunch at 12:00 IST",
      "Color" : "green"
    },
    {
      "Name": "Ona Judokiene ",
      "Message": "I Crave for Prawn fry Today.",
      "image" : "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Prawn+fry.webp",
      "availibilty" : "Coming Today for Lunch at 17:00 IST",
      "Color" : "green"
    },
    {
      "Name": "Linda Olsen",
      "Message": "I Crave for Pork Fry Today.",
      "image" : "https://diwi-dfv.s3.ap-south-1.amazonaws.com/Pork+cutlet.webp",
      "availibilty" : "Not able to make it Today",
      "Color" : "red"
    }
  ];
}
class CollapsePage extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  
  render() {
    // var cpucount = '0';
    const { collapseID } = this.state;
    return (
      <MDBContainer style={{ paddingBottom: "20px", marginTop: '25px' }}>
        <h2>See Who is Available For Lunch Today.</h2>
          <CardDeck>
            
            {getBuddiesMenu().map(buddy => 
              <Card>
              <Card.Img variant="top" src={buddy.image} style={{height:"100px"}} />
              <Card.Body >
                <Card.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textWeight: 'bold' }}>{buddy.Name}</Card.Title>
                <p>{buddy.Message}</p>
              </Card.Body>
              <Card.Footer style={{color: `${buddy.Color}`}}>
                {buddy.availibilty}
              </Card.Footer>
            </Card>
            )              
            }
            
          </CardDeck>
      <MDBCard className="mb-2" style={{marginTop: '25px'}}>
          <label
            style={{
              fontSize: "120%",
              fontWeight: "bold",
              float: "left",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse1")}
            className={classes.cardzooms}
            secondary
          >
            Set Your Availability Today with Your Lunch Buddies
          </label>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
                <MDBCard>
                    <MDBTable>
                    <tr>
                            <td>
                                Am I Available Today:
                            </td>
                            
                            <td>Set New Default<img src="check.webP" alt="checkbox" style={{width: '5%', height:'5%'}}/></td>
                        </tr>
                        <tr>
                            <td>
                                Add Dish:
                            </td>
                            <td><input type="text" placeholder="Please Add Dish you Crave for Today"/></td>
                        </tr>
                        <tr>
                            <td>
                                Lunch Time:
                            </td>
                            <td><input type="text" placeholder="Please Add your Timing For Lunch Today"/></td>
                        </tr>
                    </MDBTable>
                    <a class="button cta" to="/Reports" href="#home" style={{ backgroundColor: '#003755',  color: 'white' }}> Share</a> 
                </MDBCard>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
        <MDBCard className="mb-2" style={{marginTop: '25px'}}>
          <label
            style={{
              fontSize: "120%",
              fontWeight: "bold",
              float: "left",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse2")}
            className={classes.cardzooms}
            secondary
          >
            Add Groups
          </label>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
                <MDBCard>
                    <MDBTable>
                        <tr>
                            <td>Name of the Group:</td>
                            <td><input type="text" placeholder="PLease Add Group Name" /></td>
                        </tr>
                        <tr>
                            <td>
                                Add Members:
                            </td>
                            <td><input type="text" placeholder="Please Add Names"/></td>
                        </tr>
                    </MDBTable>
                    <a class="button cta" to="/Reports" href="#home" style={{ backgroundColor: '#003755',  color: 'white' }}> ADD</a> 
                </MDBCard>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
        <MDBCard className="mb-2" style={{marginTop: '25px'}}>
          <label
            style={{
              fontSize: "120%",
              fontWeight: "bold",
              float: "left",
              backgroundColor: "#003f63",
              padding: "10px 0px 10px 0px",
              color: "white",
            }}
            onClick={this.toggleCollapse("collapse3")}
            className={classes.cardzooms}
            secondary
          >
            Add Luch Buddy
          </label>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
                <MDBCard>
                    <MDBTable>
                        
                        <tr>
                            <td>
                                Add Members:
                            </td>
                            <td><input type="text" placeholder="Please Add Names"/></td>
                        </tr>
                        <tr>
                            <td>Add To Group:</td>
                            <td><input type="text" placeholder="PLease Add Group Name" /></td>
                        </tr>
                    </MDBTable>
                    <a class="button cta" to="/Reports" href="#home" style={{ backgroundColor: '#003755',  color: 'white' }}> ADD</a> 
                </MDBCard>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
        
       

      </MDBContainer>
    );
  }
}

export default CollapsePage;