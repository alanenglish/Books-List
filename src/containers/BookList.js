import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
renderList() {
  return this.props.books.map((book) => {
    return (
      <li key={book.title} className="list-group-item">{book.title}</li>
    );
  });
}

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// below function is glue between react and redux
function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}
// connect takes function and component and produces a comtainer
// the container is component that is aware of the state that is within
export default connect(mapStateToProps)(BookList);
