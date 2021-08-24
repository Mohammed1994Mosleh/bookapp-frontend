import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './component/BookFormModal';
import { AsyncSeriesWaterfallHook } from 'tapable';
import Book from './component/Book';



class BestBooks extends React.Component {


  constructor(props){
    super(props)
    this.state={
    bookInfo:[]
    }
  }
  
  async componentDidMount() {
    
    let bookUrl=`${process.env.REACT_APP_BookUrl}/books?bookName=${this.props.email.email}`
    console.log(bookUrl);
    // this.props.

let data= await axios.get(bookUrl)    
console.log(data);
this.setState({
  bookInfo:data.data
})
}

updatedBook =async(e)=>{
  e.preventDefault()
  let booData={
    title:e.target.BookName.value,
    description:e.target.description.value,
    email:this.props.email.email
  }

  console.log(booData);
  let bookInfodata = await axios.post(`${process.env.REACT_APP_BookUrl}/books1`,booData);
console.log(bookInfodata);
 await this.setState({
  bookInfo:bookInfodata.data
 })

console.log(this.state.bookInfo);
}

deleteBooks=async(booKid)=>{
  // e.preventDefault()
//  let idBook=e.target.
console.log(booKid);
// let catsInfo = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteCat/${catID}?ownerName=${this.state.ownerCatName}`)

let dataAfterdelete=await axios.delete(`${process.env.REACT_APP_BookUrl}/deleteBook/${booKid}?email=${this.props.email.email}`);
console.log(dataAfterdelete);
await this.setState({
  bookInfo:dataAfterdelete.data
})


}

// deleteBooks11(){
// this.deleteBooks()


// }




  render() {
    return(
      <div>
      <BookFormModal updatedbook={this.updatedBook}/>


    {this.state.bookInfo.map((item,indx)=>{
       return(
     <Book item1={item} deleteBooks={this.deleteBooks} key={indx}  />

       )})
     



    }



       



      </div>


    )
  }
}

export default withAuth0(BestBooks) ;
