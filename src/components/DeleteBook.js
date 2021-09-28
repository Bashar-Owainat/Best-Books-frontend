import React, { Component } from 'react'

class DeleteBook extends Component {

    deleteBookHandler = () => {
        this.props.deleteBookFunc(this.props.book._id)
    }
    render() {
        return (
            <>
                <div key={this.props.idx}>
                    {this.props.book.title}
                    {this.props.book.description}
                    {this.props.book.email}
                    {this.props.book.status}

                    <button onClick={this.deleteBookHandler}>X</button>
                </div>
            </>
        );
    }
}

export default DeleteBook;