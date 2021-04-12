import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/home/Home';
import Presupuesto from '../pages/presupuesto/Presupuesto';


const Routes = () => {
    return (
        <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/presupuesto" component={Presupuesto}/>
                    </Switch>
                    <footer className="page-footer teal lighten-2">
                        <Footer/>
                    </footer>
        </Router>
    )
}

export default Routes
