import { Link } from 'react-router-dom'


const BannerFood = ({ showBanner }) => {
    return (
        <section className={`banner-container ${showBanner ? "slide-in" : "slide-out"}`}>
            <section className='banner'>
                
                <Link to='/skybarvaldivia/deautor'>
                <div className="info infospan">
                    <img src="https://www.ehosa.es/wp-content/uploads/2017/10/cocina-de-autor.jpg" alt="" />
                    <h2>Cocina de Autor</h2>
                </div>
                </Link>

                <div className="info">
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/DSC_4224-scaled.jpg" alt="" />
                    <h2>Tapas Calientes</h2>
                </div>

                <div className="info">
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/DSC_4221-scaled.jpg" alt="" />
                    <h2>Tapas Frías</h2>
                </div>

                <div className="info">
                    <img src="https://chilis.com.mx/assets/img/menu-digital/sandwiches/chicky-chicky-ranch.jpg" alt="" />
                    <h2>Sandwiches</h2>
                </div>

                <div className="info">
                    <img src="https://cdn.colombia.com/gastronomia/2012/09/10/pie-de-limon-1660.gif" alt="" />
                    <h2>Tapas Dulces</h2>
                </div>

            </section>
        </section>
    )
}

export default BannerFood