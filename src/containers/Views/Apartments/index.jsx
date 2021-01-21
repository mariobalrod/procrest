import React from "react";
import "./styles.css";
import CardApartment from "../../../components/CardApartment";
import useConnect from './connect';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';

const Apartments = () => {
  const { apartments, isLoading } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: 'white' }} />,
  });

  if (isLoading) {
    return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  }

  return (
    <div className="apartments">
      <div className="thumApart">
        <h1 className="presen">Encuentra tu Alojamiento</h1>
      </div>
      <div className="apartmentSection">
        {apartments.map(apartment => (
          <CardApartment
            key={apartment.id}
            className="card"
            image={apartment.image}
            name={apartment.name}
            description={apartment.description}
            price={apartment.price}
            hasButtom={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Apartments;
