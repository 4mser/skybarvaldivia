import { Link } from 'react-router-dom'


const Banner = ({ showBanner }) => {
    return (
        <section className={`banner-container ${showBanner ? "slide-in" : "slide-out"}`}>
            <section className='banner'>
                
                <Link to='/skybarvaldivia/deautor'>
                <div className="info">
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/DSC_2039.jpg" alt="" />
                    <h2>Coctelería de Autor</h2>
                </div>
                </Link>

                <div className="info">
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/DSC_2046.jpg" alt="" />
                    <h2>Sugerencias del Barman</h2>
                </div>

                <div className="info">
                    <img src="https://s3.amazonaws.com/skybar.database.teset.1/DSC_4179-scaled.jpg" alt="" />
                    <h2>Cócteles sin Alcohol</h2>
                </div>

                <div className="info">
                    <img src="https://elcomercio.pe/resizer/md5TlH0jZXxW5CcW8qzaFbYiHoE=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R5OGWK36EVB4RBPKQAXSLEFMSM.jpg" alt="" />
                    <h2>Selección de Sour</h2>
                </div>

                <div className="info">
                    <img src="https://comidaschilenas.com/wp-content/uploads/2021/12/Receta-de-ramazzotti-Spritz.jpg" alt="" />
                    <h2>Cordiales</h2>
                </div>

                <div className="info">
                    <img src="https://images.food52.com/-TJwukxula6mjpX8jp-B_l43Vg4=/1200x900/92dc91ef-a1ae-4e71-ac3d-56b33975a04a--2019-1206_fernet-coke_3x2_rocky-luten_041.jpg" alt="" />
                    <h2>Especial</h2>
                </div>

                <div className="info">
                    <img src="https://www.cookingwithnart.com/wp-content/uploads/2020/03/Raspberry-Lime-Vodka-Cocktail-1.jpg" alt="" />
                    <h2>Vodka</h2>
                </div>

                <div className="info">
                    <img src="https://dosmaderas.com/wp-content/uploads/2021/10/Dos-Maderas-rum-Cocktail-East-India-Negroni-HERO-8-1024x684.jpg" alt="" />
                    <h2>Ron</h2>
                </div>

                <div className="info">
                    <img src="https://www.innaturale.com/es/wp-content/uploads/2018/11/diferencia-brandy-y-con%CC%83ac.jpg" alt="" />
                    <h2>Cognac</h2>
                </div>

                <div className="info">
                    <img src="https://images.absolutdrinks.com/ingredient-images/Raw/Absolut/dd384f67-820a-463b-95ca-85d2ed54c820.jpg?imwidth=500" alt="" />
                    <h2>Scotch</h2>
                </div>

                <div className="info">
                    <img src="https://www.jimbeam.com/sites/default/files/2019-04/Jim%20Beam%20Bourbon.jpg" alt="" />
                    <h2>Bourbon</h2>
                </div>

                <div className="info">
                    <img src="http://proudirishwhiskey.com/assets/images/proud-irish-bottiglie-e-bicchieri.jpg" alt="" />
                    <h2>Irish Whiskey</h2>
                </div>

                <div className="info">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_739876-MLC48168288252_112021-O.jpg" alt="" />
                    <h2>Pisco</h2>
                </div>

                <div className="info">
                    <img src="https://chefandhotel.cl/images/ediciones/2021_05/mtorres/Miguel-Torres-Chile-Pisco-El-Gobernador-chefandhotel.jpg" alt="" />
                    <h2>Pisco Premium</h2>
                </div>

                <div className="info">
                    <img src="https://m.elmostrador.cl/media/2021/02/gin-tonic-historia.jpg" alt="" />
                    <h2>Gin</h2>
                </div>

                <div className="info">
                    <img src="https://media.gq.com.mx/photos/5be9e30b5c1fcb74614c3782/master/pass/beneficios_del_tequila_222.jpg" alt="" />
                    <h2>Tequila</h2>
                </div>

                <div className="info">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-vinos-espumosos-por-1646150328.jpg" alt="" />
                    <h2>Espumosos</h2>
                </div>

                <div className="info">
                    <img src="https://www.cardamomo.news/__export/1622218609247/sites/debate/img/2021/05/28/jugos_naturales_crop1622218346714.jpeg_1187729725.jpeg" alt="" />
                    <h2>Gaseosas y Jugos</h2>
                </div>

                <div className="info">
                    <img src="https://images.unsplash.com/photo-1570526427001-9d80d114054d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwYnVsbHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                    <h2>Bebidas Energéticas</h2>
                </div>

                <div className="info">
                    <img src="https://www.sidrachile.com/images/food/big/1.jpg" alt="" />
                    <h2>Sidras</h2>
                </div>

                <div className="info">
                    <img src="https://cerveza-kunstmann.cl/wp-content/uploads/2022/08/Content-1300x1198_SinAlc1.png" alt="" />
                    <h2>Cervezas sin Alcohol</h2>
                </div>

                <div className="info">
                    <img src="https://laroussecocina.mx/wp-content/uploads/2019/05/cerveza-helada.jpg.webp" alt="" />
                    <h2>Cervezas de Especialidad</h2>
                </div>

                <div className="info">
                    <img src="https://images.augustman.com/wp-content/uploads/sites/3/2021/11/30134847/18.-A-bottle-of-ice-cold-Edelweiss.jpg?tr=w-1200,h-900" alt="" />
                    <h2 className="cpremium">Cervezas Premium e Internacionales</h2>
                </div>

            </section>
        </section>
    )
}

export default Banner