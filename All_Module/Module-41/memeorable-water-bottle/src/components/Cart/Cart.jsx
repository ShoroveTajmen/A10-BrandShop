import './Cart.css'
const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="cart-contianer">
        {cart.map(bottle => <img src={bottle.img}></img>)}
      </div>
    </div>
  );
};

export default Cart;
