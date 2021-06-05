import React, { Component } from 'react'
class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const product = this.props.product;
        const name = product.stocked ? product.name : 
        <span style={{color: 'red'}}>{product.name}</span>;
        return (
            <tr>
              <td>{name}</td>
              <td>{product.price}</td>
            </tr>
         );
    }
}
 
export default ProductRow;