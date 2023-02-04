import React, { useState, useEffect } from 'react';

import { MdNightlight } from 'react-icons/md'
import { CgMenuLeft} from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'
import {ImSpoonKnife} from 'react-icons/im'
import { FaHome, FaCocktail, FaRegClock, FaRegChartBar, FaConciergeBell, FaComments, FaBookmark, FaMapMarkedAlt, FaUserFriends } from 'react-icons/fa'



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

    return (
        <header className='header'>

            <CgMenuLeft className='menu' onClick={toggleMenu}></CgMenuLeft>
          
            <aside>

                <div className={`bg-aside ${isMenuOpen ? 'open' : 'closed'}`}>
                    <div className='fig fig1' style={{
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
                    }}></div>
                </div>
                

                <section className={`aside-icons ${isMenuOpen ? 'open' : 'closed'}`}>

                    <div className='nav-container'>
                        <div className='nav'>

                            <div className='dash-routes i1'>
                                <FaRegClock className='menu2'></FaRegClock>
                                <p>Reservas</p>
                            </div>

                            <div className='dash-routes i2'>
                                <FaComments className='menu2'></FaComments>
                                <p>Feedback</p>
                            </div>

                            <div className='dash-routes i3'>
                                <FaUserFriends className='menu2'></FaUserFriends>
                                <p>Team</p>
                            </div>


                            <div className='dash-routes i4'>
                                <FaConciergeBell className='menu2'></FaConciergeBell>
                                <p>Waiter</p>
                            </div>

                            <div className='dash-routes i5'>
                                <ImSpoonKnife className='menu2'></ImSpoonKnife>
                                <p>Food</p>
                            </div>


                            <div className='dash-routes imenu' onClick={toggleMenu}>
                                <GrClose className='menu-close'  ></GrClose>

                            </div>


                            <div className='dash-routes i7'>
                                <FaHome  className='menu2'></FaHome >
                                <p>Home</p>
                            </div>

                            
                            <div className='dash-routes i8'>
                                <FaCocktail className='menu2'></FaCocktail>
                                <p>Drinks</p>
                            </div>

                            <div className='dash-routes i9'>
                                <FaBookmark className='menu2'></FaBookmark>
                                <p>Saved</p>
                            </div>

                            <div className='dash-routes i10'>
                                <FaMapMarkedAlt className='menu2'></FaMapMarkedAlt>
                                <p>Map</p>
                            </div>

                            <div className='dash-routes i11'>
                                <FaRegChartBar className='menu2'></FaRegChartBar>
                                <p>Data</p>
                            </div>

                        </div>

                        <div className={`pages-inicio ${isMenuOpen ? 'open' : 'closed'}`}>
                            <div className='dash-routes i8'>
                                <FaCocktail className='menu2'></FaCocktail>
                            </div>

                            <div className='dash-routes i7'>
                                <FaHome  className='menu2'></FaHome >
                            </div>

                            <div className='dash-routes i5'>
                                <ImSpoonKnife className='menu2'></ImSpoonKnife>
                            </div>
                        </div>
                    </div>

                </section>

            </aside>

            <div className='logo'>
                <img src="\src\assets\Images\white-blue-logo_Mesa de trabajo 1-08.png" alt="" />
            </div>
            
            <section className='weather'>

                <div className='widget-clima' style={{opacity: showWidget ? '1' : '0'}}>
                    <img src="https://developer.android.com/static/design/media/widgets_info.png?hl=es-419" alt="" />
                </div>

                <div><MdNightlight className='wea' onMouseEnter={() => setShowWidget(true)} onMouseLeave={() => setShowWidget(false)}></MdNightlight></div>

            </section>
        </header>
    )
};

export default Header;
