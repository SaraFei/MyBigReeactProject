//Allows switching between pages
import { Link } from 'react-router-dom';


const OneSweet = ({ singleSweet }) => {
    if (!singleSweet) {
        // Handle the case when the doctor object is undefined
        return "😭"; // or display an error message
    }
    return (<>
        <h1> {singleSweet.sweetName}</h1>
        <h2> {singleSweet.sweetPrice}</h2>
        <Link to={`sweetDetails/${singleSweet._id}`} state={singleSweet} >
      <img  src={singleSweet.imgSweet} alt={singleSweet.sweetName} />
      </Link>
    </>);
}

export default OneSweet;