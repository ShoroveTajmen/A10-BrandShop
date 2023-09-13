/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './Cart.css'
const Cart = ({selectedActors}) => {
    console.log(selectedActors);
    return (
        <div>
            <h5>Total Actors: {selectedActors.length}</h5>
            {selectedActors.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
        </div>
    );
};

export default Cart;