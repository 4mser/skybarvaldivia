/* import { useState } from 'react';

import { FaSortUp } from 'react-icons/fa'

import drinksData from '../database/DrinksData.jsx';


const Banner = ({ showBanner }) => {

    const [showCocteleriaAutor, setShowCocteleriaAutor] = useState(Array(drinksData.length).fill(false));

    return (
        <section className={`banner-container ${showBanner ? "slide-in" : "slide-out"}` } >
            <section className='banner'>
                
            {drinksData.map((drinks, index) => (
                <div className='menu-drinks'>
                    <div className="info" onClick={() => {
                        const newShowCocteleriaAutor = [...showCocteleriaAutor];
                        newShowCocteleriaAutor[index] = !newShowCocteleriaAutor[index];
                        setShowCocteleriaAutor(newShowCocteleriaAutor);
                    }}>
                        <div className='showmore'>
                            {showCocteleriaAutor[index] ? <FaSortUp className='down'/> : <FaSortUp className='up'/>}
                            <h2>{drinks.title}</h2>
                        </div>
                        <img src={drinks.image} alt="" />
                    </div>

                    <ul style={{display: showCocteleriaAutor[index] ? 'block' : 'none'}}>
                        
                        {drinks.items.map(drink => (
                            <li>
                                <div>
                                    <h3>{drink.nombre}</h3>
                                    <p>{drink.descripcion}</p>
                                </div>
                                <h4 className='precio'>${drink.precio}</h4>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                ))}

            </section>
        </section>
    )
}

export default Banner */

/* import { useState } from 'react';
import drinksData from '../database/DrinksData.jsx';

const Banner = ({ showBanner }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategorySelection = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    const selectedCategoryData = drinksData.find((drinkCategory) => drinkCategory.title === selectedCategory);
  
    return (
      <section className={`banner-container ${showBanner ? "slide-in" : "slide-out"}`}>
        <section className='banner'>
          <div className="form">
            <select onChange={handleCategorySelection} value={selectedCategory || ''}>
              <option value="">Seleccione una categoría</option>
              {drinksData.map((drinkCategory, index) => (
                <option value={drinkCategory.title} key={index}>{drinkCategory.title}</option>
              ))}
            </select>
          </div>
  
          {selectedCategoryData && (
            <div className='selected-category-data'>
              <h2>{selectedCategoryData.title}</h2>
              <ul>
                {selectedCategoryData.items.map((drink, id) => (
                  <li key={id}>
                    <h3>{drink.nombre}</h3>
                    <p>{drink.descripcion}</p>
                    <h4 className='precio'>${drink.precio}</h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </section>
    );
  };

  export default Banner */


import React, { useState, useEffect } from 'react';
import { FaSortUp } from 'react-icons/fa';
import drinksData from '../database/DrinksData.jsx';

const Banner = ({ showBanner }) => {
    
  const [showCocteleriaAutor, setShowCocteleriaAutor] = useState(Array(drinksData.length).fill(false));
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleCategorySelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  const selectedCategoryData = drinksData.find((drinkCategory) => drinkCategory.title === selectedCategory);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  if (screenWidth >= 700) {
    return (
      <section className={`banner-container ${showBanner ? "slide-in" : "slide-out"}`}>
        <section className='banner'>
          {drinksData.map((drinks, index) => (
            <div className='menu-drinks'>
              <div className="info" key={index} onClick={() => {
                const newShowCocteleriaAutor = [...showCocteleriaAutor];
                newShowCocteleriaAutor[index] = !newShowCocteleriaAutor[index];
                setShowCocteleriaAutor(newShowCocteleriaAutor);
              }}>
                <div className='showmore'>
                  {showCocteleriaAutor[index] ? <FaSortUp className='down' /> : <FaSortUp className='up' />}
                  <h2>{drinks.title}</h2>
                </div>
                <img src={drinks.image} alt="" />
              </div>
  
              <ul style={{ display: showCocteleriaAutor[index] ? 'block' : 'none' }}>
                {drinks.items.map(drink => (
                  <li>
                    <div>
                      <h3>{drink.nombre}</h3>
                      <p>{drink.descripcion}</p>
                    </div>
                    <h4 className='precio'>${drink.precio}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>
    );
  }

  return (
    <section className={`banner-container2 ${showBanner ? "slide-in" : "slide-out"}`}>
      <section className='banner2'>
        <div className="form">
          <select onChange={handleCategorySelection} value={selectedCategory || ''}>
            <option value="">Seleccione una categoría</option>
            {drinksData.map((drinkCategory, index) => (
              <option value={drinkCategory.title} key={index}>{drinkCategory.title}</option>
            ))}
          </select>
        </div>

        {selectedCategoryData && (
          <div className='selected-category-data'>
            <ul>
              {selectedCategoryData.items.map((drink, id) => (
                <li key={drink.id}>
                  <div>
                    <h3>{drink.nombre}</h3>
                    <p>{drink.descripcion}</p>
                  </div>
                  
                  <h4 className='precio'>${drink.precio}</h4>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </section>
  )

}

export default Banner
