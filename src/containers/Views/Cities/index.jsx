import React from "react";
import './styles.css';
import useConnect from './connect';
import CardCity from '../../../components/CardCity'
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';
import Searcher from '../../../components/Searcher'
import Fondo from '../../../assets/fondoCiudad.jpg'

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
      <img src={Fondo} alt="sevilla" srcset="" id="sevilla"/>
      <h1 id="titleCity">Encuentre su ciudad</h1>
      <Searcher />
      <div className="containerCards">
        {cities.map((city) => (
          <CardCity key={city.id} cityimage={city.image} citytext={city.name} />
        ))}
      </div>
    </div>
  );
};

export default Cities;
