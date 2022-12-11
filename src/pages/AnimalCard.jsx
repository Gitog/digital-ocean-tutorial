import React from 'react';
import PropTypes from 'prop-types';

function AnimalCard({name, scientificName, size}) {

  AnimalCard.propTypes = {
    additional: PropTypes.shape({
      link: PropTypes.string,
      notes: PropTypes.string
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  }
    
  return (
    <div className='animals'>
      <h1>{name}</h1>
      <h2>{scientificName}</h2>
      <p>{size}</p>
    </div>
  );
}

export default AnimalCard;
