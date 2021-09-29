import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
class DeleteBook extends Component {

    deleteBookHandler = () => {
        console.log(this.props.book)
        this.props.deleteBookFunc(this.props.book._id)
    }
    render() {
        return (
            <>
                <div key={this.props.idx}>

                    <Card style={{ width: '18rem',  display:'block', margin:'20px' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="primary">Title:  {this.props.book.title}</ListGroup.Item>
                            <ListGroup.Item variant="success">Description:  {this.props.book.description}</ListGroup.Item>
                            <ListGroup.Item variant="danger">Email:  {this.props.book.email} </ListGroup.Item>
                            <ListGroup.Item variant="warning">Status:  {this.props.book.status} </ListGroup.Item>
                            <Button variant="danger" onClick={this.deleteBookHandler}   >DELETE</Button>
                        </ListGroup>
                    </Card>

                </div>
            </>
        );
    }
}

export default DeleteBook;