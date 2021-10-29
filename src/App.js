import logo from './logo.svg';
import './App.css';
import Articles from './Components/Articles';
import CurrentNews from './Components/CurrentNews';
import News from './Components/News';
import Home from './Components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return(
        <Router>
            <Route path="/" exact component = {Home} />
            <Route path="/search"  component = {Articles} />
            <Route path="/currentUs"  component = {CurrentNews} />   
            <Route path="/current"  component = {News} />

        </Router>
    );
  
}

export default App;
