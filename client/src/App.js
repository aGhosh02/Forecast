// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';  
import AddData from './ForecastTool/AddData';  
import Forecastlist from './ForecastTool/Forecastlist';  
import EditData from './ForecastTool/EditData';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddData'} className="nav-link">Add Record</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Forecastlist'} className="nav-link">Forecast List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/AddData' component={AddData} />  
          <Route path='/edit/:id' component={EditData} />  
          <Route path='/Forecastlist' component={Forecastlist} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App; 