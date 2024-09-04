import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

function HomePage(){
    return(
        <div className="homepage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quidem porro omnis maxime sunt praesentium ab sed
                     cupiditate laborum dolor esse quia nulla rem earum
                     inventore molestias nesciunt, asperiores est incidunt?
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Properties Available</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage