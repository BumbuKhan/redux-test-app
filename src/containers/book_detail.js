import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <p>Please select an book</p>;
        }

        return (
            <div>
                {this.props.book.title}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);