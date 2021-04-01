import "./styles.css";
import { useState } from "react";

export default function App() {
  /* const initialProducts = [
    "Milk",
    "Meat",
    "Apples",
    "Oranges",
    "Cream",
    "Bacon"
  ]; 
  this is irrelevant now and we can have an empty array as the initial state (line 14)*/

  const [products, setProducts] = useState([]);

  function handleProductRemove(productName) {
    console.log(`Item removed: ` + productName);
    const newProductList = products.filter((product) => {
      return product !== productName;
    });
    console.log(newProductList);

    setProducts(newProductList);
    console.log(`New Array returned: ` + newProductList);
  }

  function renderProducts() {
    const arrayOfComponents = products.map((productName) => {
      return (
        <Product
          onClickProductRemove={handleProductRemove}
          name={productName}
          key={productName} // use ID next time in curly brackets
        />
      );
    });

    return arrayOfComponents;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.productName;
    console.log("Form submitted");
    console.log(event.target.productName.value); // to see what was entered

    // add the value of the input to the Products
    // ... is the spread operator

    const newProducts = [...products, input.value];
    setProducts(newProducts);
    form.reset();
  }

  return (
    <div className="App">
      <h1 className="heading">Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="add to the list here.."
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul className="listParent">{renderProducts()}</ul>
    </div>
  );
}

function Product({ name, onClickProductRemove }) {
  function handleButtonClick() {
    onClickProductRemove(name);
  }

  return (
    <li className="listItem">
      {name + ` `}
      <button className="deleteButton" onClick={handleButtonClick}>
        delete
      </button>
    </li>
  );
}
