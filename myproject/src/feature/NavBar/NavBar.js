import { useSelector } from "react-redux";
import RegisteredUserNavBar from "./RegisteredUserNavBar";
import GuestNavBar from "./GuestNavBar";
import ManagerNavBar from "./ManagerNavBar";

/*לבדוק האם מנהל*/
const NavBar = () => {
    let user = useSelector(state => state.userState.currentUser);
    if (!user)
        return (
            <GuestNavBar />
        )
    else if (user.role === 'admin')
        return (
            <ManagerNavBar />)
    return (
        <RegisteredUserNavBar />
    );
}

export default NavBar;



