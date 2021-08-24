import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';



class Book extends React.Component{

    deleteBooks1=()=>{
        this.props.deleteBooks(this.props.item1._id)


    }



render(){

return(

<>
    <Card style={{ width: '18rem' }} >
    <Card.Body>
    <Card.Title>{this.props.item1.title} <button onClick={this.deleteBooks1} >Deletete</button></Card.Title>
    <Card.Text>
      description:{this.props.item1.description}
    </Card.Text>

   </Card.Body>
 </Card>

</>


)


}



}

export default Book;