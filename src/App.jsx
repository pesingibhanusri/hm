import React, { Component } from "react";
import Header from "./Components1/Header/Header";
import "bootstrap/dist/css/bootstrap.css"
import "./Components1/Header/Header.css"
import Cards from "./Components1/Banner/Banner";
import Footer from "./Components1/Footer/Footer"
import "./Components1/Banner/Banner.css"
import "./Components1/Footer/Footer.css"
class App extends Component {
  render() {
    return (
      <><Header></Header>
      <Cards></Cards>
      <Footer></Footer>
     
       
      </>
    );
  }
}

export default App;
