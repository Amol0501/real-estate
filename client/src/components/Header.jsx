import {FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {
  const { currentUser } = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className="bg-slate-200 shadow-md flex justify-between items-center p-3 lg:px-40">
      <h1 className="font-bold text-sm sm:text-xl flex flex-warp">
        <span className="text-slate-500">Home</span>
        <span className="text-slate-950 ">X</span>
        <span className="text-slate-700">Trade</span>
      </h1>
      <form onSubmit = {handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center gap-1 sm:gap-5">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none w-24 sm:w-64" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button>
          <FaSearch className='text-slate-600' />
        </button>
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