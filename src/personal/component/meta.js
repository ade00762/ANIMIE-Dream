import react from 'react'
import { Helmet } from 'react-helmet'


const Meta = ({title}) => {
    
    return (
        <Helmet>
            <title>{title}</title>
            {/* <meta description={des} /> */}
        </Helmet>
    )
  }

  Meta.defaultProps ={
      title :"Anime planet",
      
  }

export default Meta;