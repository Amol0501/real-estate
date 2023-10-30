import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className="bg-slate-200 shadow-md flex justify-between items-center p-3 lg:px-40">
      <h1 className="font-bold text-sm sm:text-xl flex flex-warp">
        <span className="text-slate-500">Home</span>
        <span className="text-slate-950 ">X</span>
        <span className="text-slate-700">Trade</span>
      </h1>
      <form className="bg-slate-100 p-3 rounded-lg flex items-center gap-1 sm:gap-5">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none w-24 sm:w-64" />
        <FaSearch className='text-slate-600' />
      </form>
      <ul className='flex sm:gap-7'>
        <Link to="/">
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
        </Link>
        <Link to="/about">
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
        </Link>
        <Link to="/profile">
        {currentUser ? ( <img className='rounded-full h-7 w-7 obeject-cover' src = {currentUser.avatar} alt = 'profile' />) : (<li className='text-slate-700 hover:underline cursor-pointer'>Sign-in</li>)}
        </Link>
      </ul>
    </div>
  )
}

export default Header;