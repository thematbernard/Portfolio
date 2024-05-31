import React, {useState} from 'react';
import Logo from '../assets/profilepic.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'


function Navbar() {

    //Statemachine -- name is openLinks and function that
    //changes it is setOpenLinks
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className="navbar"> 
        
      <div className= "leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className='hiddenLinks'>
        <Link to='/'> Home</Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/about'> About</Link>
        <Link to='/contact'> Contact</Link>
        </div>
      </div>
      <div className= "rightSide">
        <Link to='/'> Home</Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/about'> About</Link>
        <Link to='/contact'> Contact</Link>
        <button onClick={toggleNavBar}>
            <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar

