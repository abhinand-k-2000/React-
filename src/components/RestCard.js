
import {IMG_URI} from "../utilities/constants"

const RestCard = (props) => {
    const {resData} = props
    const {name, locality, costForTwo, avgRating} = resData.info
    return ( 
        
        <div className="rest-card">
            <img alt="img-logo" className="img-logo" src={IMG_URI+resData?.info?.cloudinaryImageId}></img>
        
            <div className="rest-card-info">
            <h3>{name }</h3>    
            <h5>{locality}</h5> 
            <h5>{costForTwo}</h5>   
            <h5>{avgRating} star </h5>  </div> 
            {/* <h5>Rs. {price}</h5>   */}             
        </div> 
    )
}


export default RestCard