import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./vendeur/login";
import Signup from "./vendeur/signup";
import Validation from "./admin/validation";
import ValidationV from "./admin/vendeur";
import Home from "./admin/home";
import Product from "./admin/product";
import Newpass from "./vendeur/validation";
import Addproduct from "./vendeur/Addproduct";
import test from "./vendeur/login";
import dashboard from "./vendeur/dashboard";
import Validuser from "./vendeur/validationuser";
import Validshipped from "./admin/validateshipped";


function App() {
  return (<Router>
    
    <div className="App">
  
    
	
  
         

  {/* <div id="slider">
		<ul>
			<li style={{ backgroundImage: `url(images/01.jpg)` }}>
				<h3>Make your life better</h3>
				<h2>Genuine diamonds</h2>
				<a href="#" class="btn-more">Read more</a>
			</li>
			<li class="purple" style={{ backgroundImage: `url(images/01.jpg)` }}>
				<h3>She will say “yes”</h3>
				<h2>engagement ring</h2>
				<a href="#" class="btn-more">Read more</a>
			</li>
			<li class="yellow" style={{ backgroundImage: `url(images/01.jpg)` }}>
				<h3>You deserve to be beauty</h3>
				<h2>golden bracelets</h2>
				<a href="#" class="btn-more">Read more</a>
			</li>
		</ul>
	</div> */}


  

    <div className="auth-wrapper">
        <div className="container">
	
        
      
      <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/valid" component={Validation} />
            <Route path="/validation" component={ValidationV} />
            <Route path="/Newpass" component={Newpass} />
            <Route path="/Addproduct" component={Addproduct} />
            <Route path="/Dashboard" component={dashboard} />
			<Route path="/Product" component={Product} />
            
			<Route path="/home" component={Home} />
			<Route path="/Validshipped" component={Validshipped} />
			<Route path="/:id" component={Validuser} />
			
        
           
         
            <Route path="/test" component={test} />
           
          </Switch>
          </div>
          </div>
    </div>
    </Router>
  );
}

export default App;
