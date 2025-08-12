import CarStatusRow from './CarStatusRow';

function CarStatusTable({ data }) {
  return (
    <div>
      {data.map((car, index) => (
        <CarStatusRow 
          key={car.id} 
          car={car} 
          rowNumber={index + 1}
        />
      ))}
    </div>
  );
}

export default CarStatusTable;