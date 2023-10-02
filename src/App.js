import './App.css';
import Carcard from './components/Carcard';
import Navbar from './components/Navbar';
import carData from './data';

function App() {
  return (

    <>

      <Navbar />

      <div className="container">

      {/* map data of carData  */}
      {carData.map((car) => {
        return (
          <Carcard key={car.id} {...car} />
        )
      })}
      </div>
    </>

  );
}

export default App;
