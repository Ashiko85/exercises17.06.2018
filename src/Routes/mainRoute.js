import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Counter from '../Components/Counter';
import About from './About';
export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Counter}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
};