import React, { Component } from "react"
import ItemCard from "../ItemCard/itemCard.jsx"
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


class ItemCardContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       modal: false,
    //       backdrop: true
    //     };
    
    //     this.toggle = this.toggle.bind(this);
    //   }
    
    //   toggle() {
    //     this.setState({
    //       modal: !this.state.modal
    //     });
    //   }    
    render(){
    
        return(
            <Container fluid>
                
         
                        <Row>
                            <Col>
                                <strong className="item-card-container-title"> ItemCardContainer </strong>
                            </Col>
                        </Row>
                        <Row>
                            
                            {this.props.item.map(item => {   
                                return(
                                    <Col>
                                        <ItemCard 
                                        key={item._id}
                                        item={item}
                                        // onIncrement={this.props.onIncrement}
                                        // addToCart={this.props.addToCart}
                                        handleItemClick={this.props.handleItemClick}
                                        />  
                                    </Col>    
                             )} 
                            )}
                           
                        </Row>
             </Container>        
        )
    }
}

export default ItemCardContainer;