import React, { Component } from 'react'
class SearchBar extends Component {
    constructor(props) {
      super(props);
    }
    
    handleFilterTextChange = (e) => {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange = (e) => {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <div>
          <input
            type="text"
            placeholder="Izlash..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}/>
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              id="onlyInStock" 
              name="onlyInStock"
              onChange={this.handleInStockChange} />
              <label for="onlyInStock">Faqat omborda mavjud bo'lgan maxsulotlar</label>
          </p>
        </div>
      );
    }
  }

export default SearchBar;