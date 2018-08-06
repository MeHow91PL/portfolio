<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
=======
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
>>>>>>> ad82d129737209e4172c225bd53ee882b0aaefee
