import * as React from 'react';
import './App.css';
<<<<<<< HEAD

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
=======
import Layout from './components/layout/layout';

interface IProps{
  history: object
}

class App extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <Layout history={this.props.history} />
>>>>>>> cd1034b9c2ceffd335d95c2e25b82dc26e242f07
      </div>
    );
  }
}

export default App;
