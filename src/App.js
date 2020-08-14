import React from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';

import './App.css';

class App extends React.Component {
  constructor () {
    super();
    
    this.state = {
      kawarjeya: [],
      searchField: ""
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({kawarjeya : users}))
  }

  render () {
    const { kawarjeya, searchField } = this.state;
    const filteredKawarjeya = kawarjeya.filter(kawarji => 
        kawarji.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <input type="search" placeholder="search" onChange={e => {this.setState({searchField : e.target.value})}}/>
        <CardList kawarjeya={filteredKawarjeya} />
      </div>
    );
  }


}

export default App;
