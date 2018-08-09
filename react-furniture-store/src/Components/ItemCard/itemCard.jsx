import React, { Component } from "react"
import './style.css';
import { 
    
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Container, 
    Row, 
    Col

} from 'reactstrap';


class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          backdrop: true
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    render(){
        return(
            <div className="item-card-component">
                <Container>
                   
                    <Col> 
                    
                        <div className="item-card-component-modal-div">
                                
                                <Button 
                                    onClick={this.toggle} 
                                    className="item-card-modal-button">
                                    
                                    <strong>{this.props.item.title}</strong>
                                    <br></br>
                                    <img src={this.props.item.photo1URL}/>
                                </Button>
                                
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader 
                                    toggle={this.toggle}
                                    >
                                    <h1>{this.props.item.title}</h1>
                                </ModalHeader>
                                <ModalBody className = "item-card-modal-body">

                                    <img src={this.props.item.photo1URL}/>
                                    
                                    <p> {this.props.item.description}</p>
            
                                    <p> {this.props.item.price} </p>
            
                        
                                    {/* <button onClick={this.props.handleItemClick.bind(null,this.props.item)}> + </button> */}
                                

                                </ModalBody>
                                <ModalFooter>
                                    <Button 
                                    color="primary" 
                                    
                                    onClick={()=>{this.props.handleItemClick(this.props.item); this.toggle()}}
                                    >
                                    Add To Shopping Cart
                                    </Button>
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                                </Modal>
                            </div>                        
                    
                    </Col>
               
            </Container> 
        </div>
    )
    }
}

export default ItemCard; 


