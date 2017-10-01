import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
renderList() {
  return this.props.books.map((book) => {
    return (
      <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">
        {book.title}
      </li>
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

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect takes function and component and produces a comtainer
// the container is component that is aware of the state that is within
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// Promote BookList from a component to container, it needs to know about this new dispatch
// method, selectBook. Make it available as a prop
