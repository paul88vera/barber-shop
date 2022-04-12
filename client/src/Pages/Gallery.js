import React from 'react';
import PhotoList from '../components/PhotoList';

function Gallery() {
  return (
    <section>
      <h1 data-testid="h1tag">Photos from the Shop</h1>
      <PhotoList />
    </section>
  );
}

export default Gallery;
