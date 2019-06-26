import React from "react";
import "../css/SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  render() {
    return (
      <div
        className="search-bar ui raised segment"
      >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui category search">
            {/* <label style={{marginRight:'20px'}}>Search Viedos</label> */}
            <div style={{ display: "flex" }} className="ui icon input">
              <input
                value={this.state.term}
                type="text"
                className="prompt"
                placeholder="Search vids.."
                onChange={this.onInputChange}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
