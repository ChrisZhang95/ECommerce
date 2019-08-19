import React from 'react';
import CustomButton from '../custom-button/custom-button';
import CartItem from  '../cart-item/cart-item';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router';

import './cart-dropdown.scss';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.length 
          ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem}/>
            ))
          : 
            <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));