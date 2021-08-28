import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class Updatemodel extends React.Component{
    constructor(props){
        super(props)
        this.state={
          newData:{
              title:'',description:'',

          }  
        }
    }

newData =async(e)=>{
    e.preventDefault();
    console.log(e.target.UpdatedBookName.value);
  await this.setState({
        newData:{
         email:this.props.updatedData.email,   
        title:e.target.UpdatedBookName.value,
        description:e.target.Updateddescription.value,
        id:this.props.updatedData._id
        }


    })
console.log(this.state.newData);
this.props.updateddatareaday(this.state.newData)

}

    

render (){

    // console.log(this.props.updatedData);
    return(
  <>


    <Modal show={this.props.showmodel} onHide={this.props.closeupdatedModel}>
        <Modal.Header closeButton>
          <Modal.Title>Update Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  onSubmit={this.newData}>
           <input type='text' name='UpdatedBookName' defaultValue={this.props.updatedData.title}/>
           <input type='text' name='Updateddescription'  defaultValue={this.props.updatedData.description} />
           <input type='submit' value='Update Book'/>
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeupdatedModel}>
            Close
          </Button>


         
           
          
          
        </Modal.Footer>
   </Modal>  
 
 </>
  )
 }
}

export default Updatemodel;