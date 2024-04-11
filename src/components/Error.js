
import {useRouteError} from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1> OOPs !!!!</h1>
            <h3> Something Went Wrong.....</h3>
            <h4>Status: {error.status}</h4>
            <h4>Reason: {error.statusText}</h4>
        </div>
    )
}

export default Error