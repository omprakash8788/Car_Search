import React from "react";
import CarCard from "./CarCard";

const CarList = ({ cars }) => {
  console.log(cars);
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
        // <CarCard/>
      ))}
    </div>
  );
};

export default CarList;


// ----------------------------------------------

// import React from 'react';
// import CarCard from './CarCard';
// import './CarList.css';

// const CarList = ({ cars }) => {
//   return (
//     <div className="car-grid">
//       {cars.map((car) => (
//         <CarCard key={car.id} car={car} />
//       ))}
//     </div>
//   );
// };

// export default CarList;
