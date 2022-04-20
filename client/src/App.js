import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Services from './Pages/Services';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Footer from './components/Footer';
import Profile from './Pages/Profile';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
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
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
          </div>
          <Footer />
        </main>
      </Router>
    </ApolloProvider>
  );
}
export default App;
