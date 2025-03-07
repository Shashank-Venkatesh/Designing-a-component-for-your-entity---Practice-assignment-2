// write product card here
import Button from "../components/button.jsx";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div>
      <img
        src={productImage}
        alt={productName}
      />
      <h2>{productName}</h2>
      <p>{productPrice}</p>
      <div>
        <Button text="View Product" onClick={() => alert("Product details coming soon!")} />
      </div>
    </div>
  );
};

export default Productcard;