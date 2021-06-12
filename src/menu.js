import React, { PureComponent } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import About from './about';
import Home from './home';
import Products from './products';
class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Asosiy</Link>
                    </li>
                    <li>
                        <Link to="/products">Maxsulotlar</Link>
                    </li>
                    <li>
                        <Link to="/about">Biz haqimizda</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </div>

        );
    }
}

export default Menu;