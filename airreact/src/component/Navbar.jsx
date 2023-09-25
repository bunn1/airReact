import logo from '../imagesTwo/airbnb-logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="logo-img" alt="logo" width="50px"/>
      <h2 className="head-title">airbnb</h2>
    </nav>

  );
}

export default Navbar;
