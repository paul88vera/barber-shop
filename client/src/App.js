import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Profile from "./Pages/Profile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // link: httpLink,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main className="main-page">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
          <Footer />
        </main>
      </Router>
    </ApolloProvider>
  );
}
export default App;
