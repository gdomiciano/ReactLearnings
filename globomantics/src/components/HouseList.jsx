import React, { useState } from "react";
import HouseRow from "./HouseRow";

const housesArray = [
  { id: 1, address: "123 Main St", country: "USA", askingPrice: 300000 },
  { id: 2, address: "456 Elm St", country: "Canada", askingPrice: 400000 },
];

const HouseList = () => {
  const [houses, setHouses] = useState(housesArray);
  const addHouse = () => {
    const newHouse = { id: 3, address: "789 Oak St", country: "UK", askingPrice: 500000 };
    setHouses([...houses, newHouse]);
  }
  return (
    <>
    <div className="row mb-2">
      <h2 className="themeFontColor text-center">Houses currently on the market</h2>
    </div>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Address</th>
          <th>Country</th>
          <th>Asking Price</th>
        </tr>
      </thead>
      <tbody>
        {houses.map((house) => <HouseRow house={house} key={house.id} />)}
      </tbody>
    </table>
    <button className="btn btn-primary" onClick={addHouse}>Add</button>
    </>
   );
}

export default HouseList;