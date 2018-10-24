import React, { Component } from 'react';
import { getItemsStart } from 'actions';
import { connect } from 'react-redux';
import ProductItem from '../ProductItem';
import './Products.css';

class Products extends Component {
  componentDidMount() {
    this.props.getItemsStart();
  }

  render() {
    const { items } = this.props;
    return(
      <div className="products">
        {items.map(item=> {
          return (              
            <ProductItem
              key={item.id} 
              id={item.id}
              title={item.title}
              thumbnail={item.images.image[0].src}
            />)
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
  }
}

export default connect(mapStateToProps, { getItemsStart })(Products);
