import {Link} from 'react-router-dom';
function ServiceProviderHome()
{
    return(
        <div className="App">
        <div> 
        <nav  className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <ul className="nav navbar me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/mybooking" className="navbar-brand">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="navbar-brand">Catagory</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="navbar-brand">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/mybooking" className="navbar-brand">MyServices</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="navbar-brand">Logout</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        </div>
        </div>
         
   )
}
export default ServiceProviderHome;