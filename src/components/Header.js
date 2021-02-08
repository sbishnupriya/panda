import { Link } from "react-router-dom";
const Header = () => {
	return(

<nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            <div className="logoContainer">
            <Link to="/">
              <img alt="Myntra Logo and Tagline -" className="n3VNCb" src="https://www.logotaglines.com/wp-content/uploads/2016/08/26-1443262056-myntra-logo-image-1200x900.jpg" data-noaft={1} jsname="HiaYvf" jsaction="load:XAeZkd;" style={{width: '42px', height: '40px'}} />
            </Link>
            </div>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/jeans">MEN</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">WOMEN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">KIDS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">HOME&amp;LIVING</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">OFFERS</a>
            </li>
            <form className="form-inline">
              <div className="input-group">
                <input type="text" className="form-control navbar-search" placeholder="Search for product, brands and more" />
              </div>    
            </form>
            <li className="nav-item  nav-space">
              <span className="absolute"><i className="far fa-user" /></span>
              <span className="nav-link thinText"><Link to="/login">Login</Link></span>
            </li> 
            <li className="nav-item  nav-space">
              <span className="absolute"><i className="far fa-heart" /></span>
              <span className="nav-link thinText">Wishlist</span>
            </li>
            <li className="nav-item  nav-space">
              <span className="absolute"><i className="fas fa-shopping-bag" /></span>
              <span className="nav-link thinText bag">Bag</span>
            </li>
          </ul>
        </nav>
		);
}

export default Header;