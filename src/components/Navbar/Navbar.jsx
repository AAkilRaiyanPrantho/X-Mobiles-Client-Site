import { NavLink } from "react-router-dom";
import './Navbar.css';
// import { useContext } from "react";
// import { AuthContext } from "../AuthProviders/AuthProvider";

const Navbar = () => {

//   const{ user, logOut } = useContext(AuthContext);


//   const handleLogOut = () =>{
//     logOut()
//     .then(() => console.log('User logged Out'))
//     .catch(error => console.error(error))
//   }

  return (
    <div className="navbar bg-base-200 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Homepage</NavLink> 
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink> 
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="normal-case text-2xl">
          <p>
            <span className="text-[#ee4747] font-extrabold text-3xl">X-</span>
            <span className="text-[#ee4747] font-extrabold text-3xl">M</span>obiles
          </p>
        </a>
      </div>
      <div className="navbar-end">
      <ul>
            <li>
              <button className="btn btn-error"><NavLink to="/addProducts">Add Products</NavLink></button> 
            </li>
          </ul>
      </div>
      {/* {
        user? <> <div className="navbar-end"><div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {
              user.photoURL?<><img src={user.photoURL} alt="" /></>:<><img src="https://i.ibb.co/S68L7kq/Photo-not-available-man.jpg" alt="" /></>
            }
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <p>{user? <span>{user.displayName}</span>: user.email }</p>
          </li>
          <li><a onClick={handleLogOut}>Logout</a></li>
        </ul>
      </div>
    </div></>:<><div className="navbar-end">
          <div>
            <ul>
              <li>
                <NavLink to='/signUp'>
                  <button className="btn btn-ghost">
                    Sign Up</button>
                    </NavLink></li>
                    </ul>
                    </div></div></>
      } */}
       
      </div>
    
  );
};

export default Navbar;