import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';



class BestBooks extends React.Component {


  constructor(props){
    super(props)
    this.state={
    bookInfo:[]
    }
  }
  
  async componentDidMount() {
    
    let bookUrl=`${process.env.REACT_APP_BookUrl}/books?bookName=${this.props.email.email}`
let data= await axios.get(bookUrl)    

this.setState({
  bookInfo:data.data
})
console.log(this.state.bookInfo[0].title);
  
  }
  render() {
    return(
      <div>
    {this.state.bookInfo.map((item,indx)=>{
       return(

        <Card style={{ width: '18rem' }} key={indx}>
        <Card.Body>
        <Card.Title>{indx}{this.state.bookInfo.title} </Card.Title>
        <Card.Text>
          description:{this.state.bookInfo.description}
        </Card.Text>

       </Card.Body>
     </Card>


       )})
     



    }



       



      </div>


    )
  }
}

export default BestBooks;
