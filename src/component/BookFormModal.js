import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class BookFormModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
          shoModel:false  
        }
    }

    showModel=()=>{
        this.setState({
            shoModel:true
        })

    }

    handleClose=()=>{
        this.setState({
            shoModel:false
        })

    }


render (){
    return(
  <>
 <button onClick={this.showModel}>Show Model</button> 


    <Modal show={this.state.shoModel} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  onSubmit={this.props.updatedbook}>
           <input type='text' name='BookName' placeholder='Book Nmae'/>
           <input type='text' name='description' placeholder='description' />
           <input type='submit' value='Add Books'/>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>


         
           
          
          
        </Modal.Footer>
   </Modal>  
 
 </>
  )
 }
}

export default BookFormModal;