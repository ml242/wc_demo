import React from 'react';
import {NavItem} from 'react-bootstrap'

var thisStyle = {
  "line-height": "normal"
}


const Search = React.createClass({

  getInitialState() {
    return { value: '' };
  },

  handleChange(event) {
    this.setState({value: event.target.value});
  },

  render() {

    return (
      <NavItem>
        <input style={thisStyle} type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
      </NavItem>
    );
  }
});

export default Search;