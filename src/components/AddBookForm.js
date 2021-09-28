import React, { Component } from 'react';

class AddBookForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.addBookFunc} >
                    <input type="text" name='title' placeholder='enter book title' />
                    <input type="text" name='description' placeholder='enter book description' />
                    <input type="text" name='email' placeholder='enter your email' />
                    <input type="text" name='status' placeholder=' status' />
                   
                   
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        )
    }
}

export default AddBookForm