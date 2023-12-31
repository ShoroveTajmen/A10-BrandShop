/* eslint-disable react/prop-types */
import FoodCart from "../../../Components/FoodCart/FoodCart";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <FoodCart key={item._id} item={item}></FoodCart>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
