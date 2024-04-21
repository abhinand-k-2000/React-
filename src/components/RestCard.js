import { IMG_URI } from "../utilities/constants";

const RestCard = (props) => {
  const { resData } = props;
  const { name, locality, avgRating } = resData.info;



  return (
    <div className="rest-card m-3 p-3 bg-slate-100 rounded-lg  w-64 h-[25rem] hover:bg-slate-200">
      <img
        alt="img-logo"
        className="img-logo w-56 rounded-xl h-[15em]"
        src={IMG_URI + resData?.info?.cloudinaryImageId}
      ></img>

      <div className="rest-card-info space-x-3">
        <h3 className="text-xl  p-2 font-semibold">{name}</h3>
        <h5 className=" font-medium">{locality}</h5>
        <h5 className=" font-medium">{avgRating} star </h5>{" "}
      </div>
      {/* <h5>Rs. {price}</h5>   */}
    </div>
  );
};


export const withPromotedLabe = (RestCard) => {
    return (props)=> {
        return(
            <>
            <label className="absolute m-3  px-2 bg-black text-white rounded-md">Promoted</label>
            <RestCard  {...props}/>
            </>
        )
    }
}




export default RestCard;
