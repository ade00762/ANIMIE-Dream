import react from 'react';
import Meta from '../component/meta'
import imageB from './images/ANIME-4B.jpg'


const About = () => {
    // const AboutAnime = [
    //     {
    //         name:'Nine 2 Koibito Sengen',
    //         episode:'1',
    //         movie: image1,
    //         alt: "Image 1"
    //     },
    //     {
    //         name:'Nine 2 Koibito Sengen',
    //         episode:'2',
    //         movie: image2,
    //         alt: "image 2"
    //     },
    //     {
    //         name:'Nine 2 Koibito Sengen',
    //         episode:'3',
    //         movie: image3,
    //         alt: "Image 3"
    //     },
    //     {
    //         name:'Nine 2 Koibito Sengen',
    //         episode:'4',
    //         movie:image4,
    //         alt: "Image 4"
    //     },
    //     {
    //         name:'Nine 2 Koibito Sengen',
    //         episode:'5',
    //         movie:image3,
    //         alt: "Image 5"
    //     },
    // ]

    return(
        <div className="container-fluid text-center bg-grad-A text-white">
            
            <h2 className=" ">About us</h2>
            <div className="row">
                <div className="col ">
                    <img src={imageB} alt="" className='p-4'/>
                    <img src={imageB} alt="" className='p-4'/>
                    <img src={imageB} alt="" className='p-4'/>
                </div>
                
                
            </div>
            <div className='bg-primary text-center p-5 w-100 height-50'>
                <div className='row'>
                    <p className='  container-fluid col-md-col-8 col-sm-12'>
                        Anime-Planet is a site created by fans, for fans. Though millions of users a month use the site, we're staffed by only a small team of volunteers including the founder, developers, and content moderators. If you're interested in contributing, check out how to support the site. For help with questions or suggestions about content on the site (such as anime, manga, or people) you can get in touch with the correct set of moderators (see below).
                    </p>
                         
                         
                </div>
            </div>
            <div className='  bg-dark text-center'>
                <div className='row'>
                    <p className=' container-fluid p-5 col justify-content between text-muted height-50'>
                        Anime-Planet is a site created by fans, for fans. Though millions of users a month use the site, we're staffed by only a small team of volunteers including the founder, developers, and content moderators. If you're interested in contributing, check out how to support the site. For help with questions or suggestions about content on the site (such as anime, manga, or people) you can get in touch with the correct set of moderators (see below).
                    </p>
                         
                         
                </div>
            </div>
            
        </div>
    )
}
export default About