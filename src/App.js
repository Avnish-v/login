import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import AddToCart from "./components/AddToCart";
import WishList from "./components/WishList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDet from "./components/ProductDet";

function App() {
  return (
 
  <div style={{backgroundColor:"#908d8d"}}>
  <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Shop  key="items"  link="items" />}/>
      <Route exact path="/Mens" element={<Shop  key="mens"  link="men"/>}/>
      <Route exact path="/Womens"  element={<Shop  key="womens" link="women"/>}/>
      <Route exact path="/Unisex"  element={<Shop  key="Unisex" link="unisex"/>}/>
       <Route exact path="/kids"  element={<Shop  key="kids" link="kids"/>}/>
       <Route exact path="/ProductDet/"  element={<ProductDet key={window.location.id}/>}/>
       <Route exact path="/AddToCart" element={<AddToCart  key={window.location.id}></AddToCart>}/>
       <Route exact path="/WishList" element={<WishList  key={window.location.id}></WishList>}/>1
    </Routes>
  
  </Router>
  </div>
  
  );
}

export default App;
