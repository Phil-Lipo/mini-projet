import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          <ComposantOne />
        </p>
      </div>
    );
  }
}

class ComposantOne extends Component {
  constructor() {
    super();
    this.state = {
      longueur: null,
      largueur: null,
      aire: null
    };
  }
  handleChangeLongueur(e){
    console.log("handleChangeLongueur"+e.target.value);
    this.setState({longueur: e.target.value},this.calculAire);
  }

  handleChangeLargueur(e){
    console.log("handleChangeLargueur"+e.target.value);
    this.setState({largueur: e.target.value},this.calculAire);
  }

  calculAire(){
    console.log(this.state.longueur+"//"+this.state.largueur)
    if(this.state.longueur != null && this.state.largueur != null){
      this.setState({aire: this.state.longueur *this.state.largueur});
    }
  }
  render() {
    return (
      <div>
        <h2>Calcul aire d'un rectangle</h2>
        <p>
        Longueur :  <input type="text" id="longueur" value={this.state.longueur} onChange={this.handleChangeLongueur.bind(this)} on/><br/>
          Largeur :<input type="text" id="largueur" value={this.state.largueur} onChange={this.handleChangeLargueur.bind(this)}/><br/>
          Aire :<input type="text" value={this.state.aire}/><br/>

        </p>
      </div>
    );
  }
}



render(<App />, document.getElementById('root'));
