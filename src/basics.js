import React from 'react'
import Avatar from './avatar'
import img2 from './assets/bitcoin-img.svg'
import img3 from './assets/logotop.png'
import Props from './props'


const  img ={
    avatarUrl: '/logo192.png',
    avartarAlt:'/logo192.png',
    avatarHeight:'100px',
    avatarWidth:'100px'
}

const secondImg = {
    avatarUrl:  img2,
    avatarAlt: 'logo-Img',
    avatarHeight:'100px',
    avatarWidth:'100px',
}
const secondImg2 = {
    avatarUrl:  img3,
    avatarAlt: 'logo-Img',
    avatarHeight:'100px',
    avatarWidth:'100px',
}

class BasicsComponent extends React.Component{

    
    render(){
        return(
            <> 
                <div id="price-section" class="pricing-section section-padding-top mb--60 mb-md-80"></div>
                <div className="container mb-5">
                    <div className="row">
                        
                    </div>
                </div>


                
            </>
        )
    }
}

const Basics = () =>{

    const boxes=["I am Happy","I am Happy","I am Happy","I am Happy","I am Happy","I am Happy"]

    const products =[
    {
        image: "./logo192.png",
        price: 100000,
        name : "logo",
    },
    {
        image: "./logo192.png",
        price: 300000,
        name : "logo",
    },
    {
        image: "./logo192.png",
        price: 400000,
        name : "logo",
    }
]
    return(
        <div className="container">
            <h1 className="text-center">Quick Bootstrap intro</h1>
            <div className="row">
                {boxes.map ((b,i)=> (
                    <div className="col-sm-4 col-6 mb-5">
                        <div className="box">
                            {b}
                        </div>
                    </div>            
                ))}  

            </div>
            <Avatar avatar={img}/>
            <Avatar avatar={secondImg}/>
            <Avatar avatar={secondImg2}/>
            <BasicsComponent/>
            <div className="row">
                {products.map((p,i)=>(
                    <div className="col-md-4" key={i}>
                        <Props product= {p}/>
                    </div>

                ))}
            </div>
            
        </div>
    )

}
export default Basics;