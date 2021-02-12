import react from 'react';
import Anime from './Anime';
import imageA from './images/ANIME-4C.jpg'

const Home = () => {
    return (
      <div className='container-fluid align-items-lg-center '>
          <h2 className=" bg-grad-A Esamp p-0">
              <div className=" row ">
                  <div className="">
                      <div className="  text-white">
                          <p className="content-E"> ANIME-Dream </p> 
                          <div className="container cadContain "> 
                                {Anime.map((a ,i) =>
                                <div className=" my-4 ani-text card-E imgBx">
                                    <img src= {a.movie} className="img-E "/>
                                    <div className=" ">
                                        <p  className="">{a.name}</p>
                                        {/* <p >{a.alt}</p> */}
                                        <p > Episode{a.episode}</p>
                                    </div>
                                </div>
                            )}
                          </div>
                      </div>
                  </div>
              </div>
          </h2>
        <div className=" p-0 bg-primary height-50">
          <div className="row">
              <div className="container col align-items-center">
                <div >
                  <img src={imageA} alt="" className='p-4'/>
                  <img src={imageA} alt="" className='p-4'/>
                  <img src={imageA} alt="" className='p-4'/>
                  <img src={imageA} alt="" className='p-4'/>
                  <img src={imageA} alt="" className='p-4'/>
                  <img src={imageA} alt="" className='p-4'/>
              
                </div>
              </div>
          </div>
        </div>
        <section className='height-50  bg-dark'>
            
        </section>
      </div>
    )
  }
export default Home;