import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router";

export default function EditProduct() {
  const [user, setUser] = useState({});
  const [vendorproduct, setVendorproduct] = useState({});
  const [product, setProduct] = useState({});

  const location = useLocation();
  
  const initialState = {
    vpid: 0,
    category_id: 1, // Make sure to set this to the correct category ID
    product_id: 11,
    quantity: 10,
    price: 10,
    offer_percentage: 10,
    offer_valid_date: "2020-10-10",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [editedProduct, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // const selectedtour = location.state.v ;
    const v = localStorage.getItem("v");
    console.log("v in edit"+v);
    fetch("http://localhost:8080/getVendorProduct?vpid=" +v)
      .then((resp) => resp.json())
      .then((data) => {
        setVendorproduct(data);
        

        // Fetch product data using vendorproduct.product.id
        fetch("http://localhost:8080/getProductById?pid=" + vendorproduct.product.id)
          .then((resp) => resp.json())
          .then((data) => setProduct(data))
          .then(() => {
            // Dispatch actions here after fetching data
            dispatch({ type: "update", fid: "vpid", value: vendorproduct.id });
            dispatch({ type: "update", fid: "product_id", value: product.id });
            dispatch({ type: "update", fid: "quantity", value: vendorproduct.quantity });
            dispatch({ type: "update", fid: "price", value: vendorproduct.price });
            dispatch({ type: "update", fid: "offer_percentage", value: vendorproduct.offerPercentage });
            dispatch({ type: "update", fid: "offer_valid_date", value: vendorproduct.offerValidDate });
          });
      });
  }, []);

  console.log(vendorproduct)
  console.log(product)

  const addProduct = (e) => {

    console.log(editedProduct)
    var reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(editedProduct),
    };

    fetch("http://localhost:8080/editExistingProduct", reqOptions)
      .then((resp) => {
        if (resp > 0) {
          alert("Product Edited");
        } else alert("Failed to Edit Product");
      });
  };

  return (
    <div>
      <div>
        <div className="container mt-5">
          <form>
            <div>
              <label htmlFor="price">Product Name</label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.productName}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={editedProduct.price}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "price",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={editedProduct.quantity}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "quantity",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="offer_percentage">Offer Percentage</label>
              <input
                type="number"
                id="offer_percentage"
                name="offer_percentage"
                value={editedProduct.offer_percentage}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "offer_percentage",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="offer_valid_date">Offer Valid Date</label>
              <input
                type="date"
                id="offer_valid_date"
                name="offer_valid_date"
                value={editedProduct.offer_valid_date}
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fid: "offer_valid_date",
                    value: e.target.value,
                  });
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => addProduct(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
