import { useState } from 'react';

import {FaSortUp} from 'react-icons/fa'

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

export default Banner
