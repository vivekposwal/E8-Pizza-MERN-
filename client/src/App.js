import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "./bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Footer from "./components/Footer";
import OrdersScreen from "./screens/OrdersScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={CartScreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/orders" exact component={OrdersScreen} />
        <Route path="/login" exact component={Loginscreen} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
