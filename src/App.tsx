import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './containers/home/Home';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import FormClubes from './components/form-clubes/FormClubes';
import {Provider} from 'react-redux'
import store from './store';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar/>
        <Route path="/" exact>
          <Home/>            
        </Route>
        <Route path="/register">
          <FormClubes/>
        </Route>
        <Footer/>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
