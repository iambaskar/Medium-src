import { UserAuth } from "./context/MediumContext";
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {

    const { user } = UserAuth();

    // const navigate = useNavigate();

    if(!user){
        return <Navigate to="/" />
    }

    return ( 
        children
     );
}
 
export default Protected;