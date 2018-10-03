import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <h1 className="heading">Pokedex</h1>
          <code>Your app code goes here</code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
