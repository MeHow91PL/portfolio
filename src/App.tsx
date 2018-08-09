import * as React from 'react';
import './App.css';
import Layout from './components/layout/layout';

interface IProps{
  history: object
}

class App extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <Layout history={this.props.history} />
      </div>
    );
  }
}

export default App;
