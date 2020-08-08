import React from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';

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
        <CardList name="wathek" >
        {this.state.kawarjeya.map ( kawarjeya => (
          <h1 key={kawarjeya.id}> {kawarjeya.name} </h1>
        ))}
        </CardList>
      </div>
    );
  }


}

export default App;
