//React
import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';

//Routing
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, } from 'connected-react-router';

//styles
import './App.css';

//Components 
import Layout from './Components/layout';

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history} >
        <div>
          <Switch>
            <Route exact path='/' component={Layout} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = {

}




export default connect(mapStateToProps, mapDispatchToProps)(App);
