import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import AboutPage from '../components/AboutPage';
import Feature from '../components/Feature';

class Routes extends React.Component {
    render(){
    return (
        <Switch>
            <Route path="/menu" component={Feature} />
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={Main} />
        </Switch>
        )
    }
}
export default withRouter(Routes)