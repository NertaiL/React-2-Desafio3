import {Link, useNavigate} from 'react-router-dom'
import "./NotFound.css";
import { Button } from 'react-bootstrap';


const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/');
  };

  return (
    <div className='maintenance'>
        <Link className='link' to='*'><h2 className='maintext'>It seems you entered a non-existent address</h2></Link>
        <Button onClick={handleClick} className='btn-warning'>Back to home</Button>
    </div>
  )
}

export default NotFound