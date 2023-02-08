import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom';

import { MdNightlight } from 'react-icons/md'
import { CgMenuLeft} from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'
import {ImSpoonKnife} from 'react-icons/im'
import { FaHome, FaCocktail, FaRegClock, FaRegChartBar, FaConciergeBell, FaComments, FaBookmark, FaMusic, FaMapMarkedAlt, FaUserFriends } from 'react-icons/fa'



const Header = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    if (window.innerWidth > 700) {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, []);

    let x = 0;
    let y = 0;
    let limitedX = 0;
    let limitedY = 0;
    if (window.innerWidth > 700) {
      x = (position.x - window.innerWidth / 2) / 20;
      y = (position.y - window.innerHeight / 2) / 20;
  
      limitedX = Math.min(Math.max(x, -25), 25);
      limitedY = Math.min(Math.max(y, -25), 25);
    }


    const [isMenuOpen, setIsMenuOpen] = useState(false);


    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [showWidget, setShowWidget] = useState(false);

    const location = useLocation();

    return (
        <header className={
            location.pathname === '/skybarvaldivia/drinks/' ? 'header-drinks'
            : location.pathname === '/skybarvaldivia/food/' ? 'header-food'
            : 'header'
          }>


            <CgMenuLeft className='menu' onClick={toggleMenu} style={{filter: isMenuOpen ? 'blur(10px)' : 'blur(0)'}}></CgMenuLeft>
          
            <aside>


                {/* Esto controla el fondo para poder hacer click en el para cerrar el navegador */}
                <div className={`bg-aside ${isMenuOpen ? 'open' : 'closed'}`} onClick={isMenuOpen ? toggleMenu : () => {}}>


                    {/* <div className='fig fig1' style={{
                    transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                    transition: "transform 0.1s ease-out",
                    }}></div>
                    <div className='fig fig2' style={{
            transform: `translate(${-limitedX}%, ${limitedY}%)`,
            transition: "transform 0.1s ease-out",
                    }}></div>
                    <div className='fig fig3' style={{
                    transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                    transition: "transform 0.1s ease-out",
                    }}></div>
                    <div className='fig fig4' style={{
            transform: `translate(${limitedX}%, ${-limitedY}%)`,
            transition: "transform 0.1s ease-out",
                    }}></div>
                    <div className='fig fig5' style={{
            transform: `translate(${limitedX}%, ${limitedY}%)`,
            transition: "transform 0.1s ease-out",
                    }}></div>
                    <div className='fig fig6'style={{
                    transform: `translate(${-limitedX}%, ${-limitedY}%)`,
                    transition: "transform 0.1s ease-out",
                    }}></div> */}
                </div>
                

                <section className={`aside-icons ${isMenuOpen ? 'open' : 'closed'}`}>

                    <div className='nav-container'>
                        <div className='nav'>

                            <div className='dash-routes i1'>
                                <Link to='/skybarvaldivia/reservas/' className='link2 reservas'><FaRegClock className='menu2'></FaRegClock></Link>
                            </div>

                            <div className='dash-routes i2'>
                                <Link to='/skybarvaldivia/comentarios/' className='link2 comentarios'><FaComments className='menu2'></FaComments></Link>
                            </div>

                            <div className='dash-routes i3'>
                                <Link to='/skybarvaldivia/empleados/' className='link2 empleados'><FaUserFriends className='menu2'></FaUserFriends></Link>
                            </div>


                            <div className='dash-routes i4'>
                                <Link to='/skybarvaldivia/meserx/' className='link2 meserx'><FaConciergeBell className='menu2'></FaConciergeBell></Link>
                            </div>

                            <div className='dash-routes i5'>
                                <Link to='/skybarvaldivia/food/' className='link2 food'><ImSpoonKnife className='menu2'></ImSpoonKnife></Link>
                            </div>


                            <div className='dash-routes imenu' onClick={toggleMenu}>
                                <GrClose className='menu-close' ></GrClose>

                            </div>


                            <div className='dash-routes i7'>
                                <Link to='/skybarvaldivia/' className='link2 home'><FaHome className='menu2'></FaHome></Link>
                            </div>

                            
                            <div className='dash-routes i8'>
                                <Link to='/skybarvaldivia/drinks/' className='link2 drinks'><FaCocktail className='menu2'></FaCocktail></Link>
                            </div>

                            <div className='dash-routes i9'>
                                <Link to='/skybarvaldivia/musica/' className='link2 musica'><FaMusic className='menu2'></FaMusic></Link>
                            </div>

                            <div className='dash-routes i10'>
                                <Link to='/skybarvaldivia/mapa/' className='link2 mapa'><FaMapMarkedAlt className='menu2'></FaMapMarkedAlt></Link>
                            </div>

                            <div className='dash-routes i11'>
                                <Link to='/skybarvaldivia/data/' className='link2 data'><FaRegChartBar className='menu2'></FaRegChartBar></Link>
                            </div>

                        </div>

                        <div className={`pages-inicio ${isMenuOpen ? 'open' : 'closed'}`}>
                            <div className='dash-routes i8'>
                                <Link to='/skybarvaldivia/drinks/' className='link drinks'><FaCocktail className='menu2'></FaCocktail></Link>
                            </div>

                            <div className='dash-routes i7'>
                                <Link to='/skybarvaldivia/' className='link home'><FaHome  className='menu2'></FaHome ></Link>
                            </div>

                            <div className='dash-routes i5'>
                                <Link to='/skybarvaldivia/food/' className='link food'><ImSpoonKnife  className='menu2'></ImSpoonKnife ></Link>
                            </div>
                        </div>
                    </div>

                </section>

            </aside>

            <div className='logo'>
                <img src="https://i.postimg.cc/PqykkNnG/white-blue-logo-Mesa-de-trabajo-1-08.png" alt="" style={{filter: isMenuOpen ? 'blur(10px)' : 'blur(0)'}}/>
            </div>
            
            <section className='weather'>

                <div className='widget-clima' style={{opacity: showWidget ? '1' : '0'}}>
                    <img src="https://developer.android.com/static/design/media/widgets_info.png?hl=es-419" alt="" />
                </div>

                <div><MdNightlight className='wea' onMouseEnter={() => setShowWidget(true)} onMouseLeave={() => setShowWidget(false)} style={{filter: isMenuOpen ? 'blur(10px)' : 'blur(0)'}}></MdNightlight></div>

            </section>

            

        </header>
    )
};

export default Header
