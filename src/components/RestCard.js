
import {IMG_URI} from "../utilities/constants"

const RestCard = (props) => {
    const {resData} = props
    const {name, locality, costForTwo, avgRating} = resData.info
    return ( 
        
        <div className="rest-card m-3 p-3 bg-slate-200 rounded-lg w-64 h-[30em]">
            <img alt="img-logo" className="img-logo w-56 rounded-xl h-[15em]" src={IMG_URI+resData?.info?.cloudinaryImageId}></img>
        
            <div className="rest-card-info">
            <h3 className="text-xl m-2 p-2 font-semibold">{name }</h3>    
            <h5 className="m-2 font-medium">{locality}</h5> 
            <h5 className="m-2 font-medium">{costForTwo}</h5>   
            <h5 className="m-2 font-medium">{avgRating} star </h5>  </div> 
            {/* <h5>Rs. {price}</h5>   */}             
        </div> 
    )
}


export default RestCard