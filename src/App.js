import './App.css';
import Carcard from './components/Carcard';
import Navbar from './components/Navbar';
import carData from './data';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


function App() {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(carData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(carData.length / itemsPerPage));
  },[itemOffset,itemsPerPage]);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % carData.length;    
    setItemOffset(newOffset);
  };

  

  return (

    <>

      <Navbar />

      <div className="container-fluid">

      {/* map data of carData  */}
      {currentItems.map((car) => {
        return (
          <Carcard key={car.id} {...car} />
        )
      })}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="→"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="←"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </>

  );
}

export default App;
