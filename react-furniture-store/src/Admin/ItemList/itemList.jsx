import React from 'react';
import { Col, Row, Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck } from 'reactstrap';
  
const ItemList = (props) => {

    const itemList = props.items.map((item, i) => {
        return (
            <Col sm={3}>
                <Card key={i}>
                    <CardImg top width="100%" src={item.photo1URL} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>${item.price}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        <Button onClick={props.showModal.bind(null, item._id)}>Edit</Button>
                        <Button onClick={props.deleteItem.bind(null, item._id)}>Delete</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    });

    return (
        <Container>
            <Row>
                <CardDeck>
                    {itemList}
                </CardDeck>
            </Row>
        </Container>
    )
};

export default ItemList;