import React from 'react';
import PhotoList from '../components/PhotoList';

function Gallery() {
  return (
    <div className="mx-auto w-75 text-center">
      <section>
        <h1 data-testid="h1tag">Photos from the Shop</h1>
        <PhotoList />
      </section>
    </div>
  );
}

export default Gallery;
