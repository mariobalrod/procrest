import React from "react";
import './styles.css';
import useConnect from './connect';
import CardCity from '../../../components/CardCity'
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';

const Cities = () => {
  const { cities, isLoading } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: 'white' }} />,
  });

  if (isLoading) {
    return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  }

  return (
    <div className="cities">
      <div className="thumCity">
        <h1 className="presen">Encuentre su ciudad</h1>
      </div>
      <div className="containerCardsCities">
        {cities.map((city) => (
          <CardCity key={city.id} id={city.id} cityimage={city.image} citytext={city.name} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
