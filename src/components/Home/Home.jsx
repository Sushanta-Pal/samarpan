import React from 'react';
import './Home.css';

import CarouselContainer from './CarouselContainer';
import Divider from './Divider';
import Quatation from './Qutation';

const Home = () => {
  return (
    <>
      <CarouselContainer />
      <div className="contant">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat illo sequi, alias, quas voluptatem error eum repudiandae dolorem corporis facilis! Labore odio blanditiis quod nulla autem dolores corrupti perferendis.
      </div>
      <div className="container my-4">
        <div className="row">
          {/* Render Divider components in a single row */}
          <div className="col-12 col-md-4">
            <Divider />
          </div>
          <div className="col-12 col-md-4">
            <Divider />
          </div>
          <div className="col-12 col-md-4">
            <Divider />
          </div>
        </div>
      </div>
      <Quatation/>
  
    </>
  );
};

export default Home;
