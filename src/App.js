import React, { useState } from 'react';
import Pagination from './components/Pagination';
import carData from './data/cars.json';
import SearchBar from './components/SearchBar';
import CarCard from './components/CarCard';
import "./App.css"
import CarList from './components/CarList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app">
      <SearchBar onSearch={setSearchTerm}  />
      <CarList cars={currentCars} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;
