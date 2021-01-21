import React from "react";
import './styles.css';
import CardCategory from '../../../components/CardCategory'
import Carrusel from '../../../components/Carrusel'
import useConnect from './connect';
import { useLoading, ThreeDots } from '@agney/react-loading';
import Loader from '../../../components/Loader';

const Categories = () => {
  const { categories, isLoading } = useConnect();
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="100" style={{ color: 'white' }} />,
  });

  if (isLoading) {
    return <Loader indicator={indicatorEl} containerProps={containerProps} />;
  }
  
  return (
    <div>
      <Carrusel />
      <h1 id="titleCategory"> Categorias </h1>
      <div className="categoriesContainer">
        {categories.map(category => (
          <CardCategory
            key={category.id}
            image={category.image}
            title={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;






