import { useContext } from "react"
import UserContext from "../utilities/UserContext"

const About = () => {

    const {loggedInUser} = useContext(UserContext)
    return (
        <div style={{height: '71.6vh'}}>
            <h1>About</h1>
            <h5>This is the about page....</h5>
            <h5 className="font-bold">User: {loggedInUser}</h5>
        </div>
    )
}


export default About