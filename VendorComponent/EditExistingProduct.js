// import { useEffect, useReducer, useState } from "react";

// export default function EditExistingProduct(v) {
//   const [vproduct, setVproduct] = useState({});
//   const [product, setProduct] = useState({});
//   const [category, setCategory] = useState({});

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "update":
//         return { ...state, [action.field]: action.value };
//       case "reset":
//         return vproduct;
//       default:
//     }
//   };

//   useEffect(() => {
//     const storedV = JSON.parse(sessionStorage.getItem("v")).id;
//     //alert(vid);
//     fetch("http://localhost:8080/getVendorProduct?vpid=" + storedV)
//       .then((resp) => resp.json())
//       .then((data) => setVproduct(data));
//   }, []);

//   useEffect(() => {
//     const storedV = JSON.parse(sessionStorage.getItem("v")).id;
//     fetch("http://localhost:8080/getProductById?vpid=" + storedV.id)
//       .then((resp) => resp.json())
//       .then((data) => setProduct(data));
//   });

//   const initialState = {
//     vpid: vproduct.id,
//     category_id: category.id,
//     product_id: "",
//     quantity: vproduct.quantity,
//     price: vproduct.price,
//     offer_percentage: vproduct.offer_percentage,
//     offer_valid_date: vproduct.offer_valid_date,
//   };

//   const [editedProduct, dispatch] = useReducer(reducer, initialState);



//   return (
//     <div>
//       <div className="container mt-5">
//         <form>
//           <div>
//             <label htmlFor="price">Product Name</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               //value={v.product.productName}
//               readOnly
//             />
//           </div>
//           <div>
//             <label htmlFor="price">Price</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={editedProduct.price}
//               onChange={(e) => {
//                 dispatch({
//                   type: "update",
//                   fid: "price",
//                   value: e.target.value,
//                 });
//               }}
//             />
//           </div>
//           <div>
//             <label htmlFor="quantity">Quantity</label>
//             <input
//               type="number"
//               id="quantity"
//               name="quantity"
//               value={editedProduct.quantity}
//               onChange={(e) => {
//                 dispatch({
//                   type: "update",
//                   fid: "quantity",
//                   value: e.target.value,
//                 });
//               }}
//             />
//           </div>
//           <div>
//             <label htmlFor="offer_percentage">Offer Percentage</label>
//             <input
//               type="number"
//               id="offer_percentage"
//               name="offer_percentage"
//               value={editedProduct.offerPercentage}
//               onChange={(e) => {
//                 dispatch({
//                   type: "update",
//                   fid: "offer_percentage",
//                   value: e.target.value,
//                 });
//               }}
//             />
//           </div>
//           <div>
//             <label htmlFor="offer_valid_date">Offer Valid Date</label>
//             <input
//               type="date"
//               id="offer_valid_date"
//               name="offer_valid_date"
//               value={editedProduct.offer_valid_date}
//               onChange={(e) => {
//                 dispatch({
//                   type: "update",
//                   fid: "offer_valid_date",
//                   value: e.target.value,
//                 });
//               }}
//             />
//           </div>
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={(e) => addProduct(e)}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
