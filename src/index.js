// import animals from "./data";

// // ******Destructure Arrays *********

// console.log(animals);
// // console.log(animals[0]);
// const [cat , dog]= animals;

// // ********Destructure Objects**********

// // console.log(cat);
// // const { name, sound ,feedingrequirements}=cat;
// //console.log(feedingrequirements);
// const { name, sound ,feedingrequirements:{food,water}}=cat;
// console.log(food);




// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./practice";

// const [ honda,tesla ]=cars;
// const {speedState :{topSpeed : hondaTopSpeed}} =honda;
// const {speedState :{topSpeed : teslaTopSpeed}} =tesla;
// const {colourByPopularity: [hondaTopColor]}=honda;
// const {colourByPopularity: [teslaTopColor]}=tesla;

// ReactDOM.render(
//      <table>
//       <tr>
//          <th>Brand</th>
//          <th>Top Speed</th>
//          <th>Top Colour</th>
//       </tr>
//       <tr>
//         <td>{tesla.model}</td>
//         <td>{teslaTopSpeed}</td>
//         <td>{teslaTopColor}</td>
//       </tr>
//       <tr>
//         <td>{honda.model}</td>
//         <td>{hondaTopSpeed}</td>
//         <td>{hondaTopColor}</td>
//       </tr>
//      </table>,document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App/>,document.getElementById("root"));