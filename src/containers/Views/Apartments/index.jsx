import React from "react";
import "./styles.css";
import CardApartment from "../../../components/CardApartment";

const Apartments = () => {
  return (
    <div className="apartments">
      <div className="thumApart">
        <h1 className="presen">Encuentra tu Alojamiento</h1>
      </div>
      <div className="apartmentSection">
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
        <CardApartment
          className="card"
          image="https://picsum.photos/200/300"
          name="Los alcores"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.apartment"
        />
      </div>
    </div>
  );
};

export default Apartments;
