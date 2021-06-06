import {useState,useEffect} from 'react';
import axios from 'axios';
import loader from './loader1.gif'	
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route,Link as NavLink} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'
import Navbar from './navbar'
import Userdetails from './Userdetails'
import Firstname from './Firstname'
import Lastname from './Lastname'
import None from './None'
function Maincomponent()
{

return(
  <div>
          <Navbar/>
				  <Userdetails/>
				  <Route exact path="/None">
				  <None/>
				</Route>
        <Route exact path="/Firstname">
				  <Firstname/>
				</Route>
        <Route exact path="/Lastname">
				  <Lastname/>
				</Route>

  </div>
)

}
export default Maincomponent;