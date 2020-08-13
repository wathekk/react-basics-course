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
        <CardList kawarjeya={this.state.kawarjeya} />
      </div>
    );
  }


}

export default App;
