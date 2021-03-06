import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
class FavBookCard extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item variant="primary">Title: {this.props.info.title}</ListGroup.Item>
                    <ListGroup.Item variant="success">Description: {this.props.info.description}</ListGroup.Item>
                    <ListGroup.Item variant="danger">Email: {this.props.info.email}</ListGroup.Item>
                    <ListGroup.Item variant="warning">Status: {this.props.info.status}</ListGroup.Item>
                
                </ListGroup>
            </Card>
        )
    }
}

export default FavBookCard;