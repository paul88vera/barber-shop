import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import Gallery from './Pages/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Services from './Pages/Services';
import Signup from './components/Signup';
import About from './Pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <main className="main-page">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
        <Footer />
      </main>
    </Router>
  );
}
export default App;
