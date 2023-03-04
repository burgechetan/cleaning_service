import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import CustomerHome from './components/CustomerHome';
import ServiceProviderHome from './components/ServiceProviderHome';
import AdminHome from './components/AdminHome';
import {useSelector} from 'react-redux';
import Logout from './components/Logout';
import RegistrationForm from './components/CustomerRegistration';
import CustomerRegistration from './components/CustomerRegistration';
import ServiceProviderRegistration from './components/ServiceProviderRegistration';
import Home from './components/Home';
import ServiceProviderRegistrationStatus from './components/ServiceProviderRegistraionStatus';
import Services from './components/Services';


 


function App() {
  const mystate=useSelector((state)=>{return state.logged})
  return (
    <div className="App">
      <div style={{display: mystate.loggedIn? "none":"block"}}> 
      <nav  className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="nav navbar me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="navbar-brand">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/lopcation" className="navbar-brand">Location</Link>
              </li>
            <li className="nav-item">
              <Link to="/login" className="navbar-brand">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/customer_registration" className="navbar-brand">CustomerRegistration</Link>
            </li>
            <li className="nav-item">
              <Link to="/serviceprovider_registration" className="navbar-brand">ServiceProviderRegistration</Link>
            </li> 
            <li className="nav-item">
              <Link to="/admin_registration" className="navbar-brand">AdminRegistration</Link>
            </li>
         
             
          </ul>
        </div>
      </nav>
      </div>
     
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/customer_registration" element={<CustomerRegistration/>} />
        <Route path="/serviceprovider_registration" element={<ServiceProviderRegistration/>} />
        
        <Route path="/customer_home" element={<CustomerHome/>} />
        <Route path="/serviceprovider_home" element={<ServiceProviderHome/>} />
        <Route path="/admin_home" element={<AdminHome/>} >
            <Route path="serviceproviderstatus" element={<ServiceProviderRegistrationStatus/>}/>
            
        </Route>
  
        <Route path="/logout" element={<Logout/>} />
      </Routes> 
      </div>
    
  )
  
}

export default App;
