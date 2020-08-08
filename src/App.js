import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    
    this.state = {
      kawarjeya: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({kawarjeya : users}))
  }

  render () {
    return (
    <div className="App">
      {this.state.kawarjeya.map(kawarjeya => (<h1 key={kawarjeya.id}> {kawarjeya.name} </h1>) )}
    </div>
  );

  }
}

export default App;
