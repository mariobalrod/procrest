import React from "react";
import './styles.css';
import useConnect from './connect';
import CardCity from '../../../components/CardCity'

const Cities = () => {
  const { cities, isLoading } = useConnect();

  if (isLoading) return <>Loading...</>;

  return (
    <div className="cities">
      <h1 id="title">Encuentre su ciudad</h1>
      <div className="containerCard">
        {cities.map((city) => (
          <CardCity key={city.id} cityimage={city.image} citytext={city.name} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
