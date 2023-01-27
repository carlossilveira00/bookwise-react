import axios from 'axios';
import { useAuth } from '../context/Auth';

const HomePage = () => {
  const auth = useAuth();

  const fetchUser = () => {
    axios.get('http://localhost:3000/member_details', {headers: {
      "Authorization" : auth.user.userToken
    }})
    .then(data => console.log(data))
  };
  return (
    <div>
      HomePage
      <button onClick={fetchUser}>Hey</button>
      <button onClick={() => {auth.logout()}}>Noo</button>
    </div>
  )
}

export default HomePage;
