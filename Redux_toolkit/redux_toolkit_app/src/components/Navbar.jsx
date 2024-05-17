import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state)=>state.card)

  return (
    <div className='flex items-center justify-between'>
        <span>Redux Tutorial</span>
        <div className='flex flex-row items-center p-3 gap-3 font-semibold'>
            <Link to={"/"}>Home</Link>
            <Link to={"/card"}>Card</Link>
            <span>items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar
