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
          <ComposantTwo />
        </p>
      </div>
    );
  }
}

class ComposantTwo extends Component {
  constructor() {
    super();
    this.state = {
      heure: null,
      minutes: null,
      nombre: null
    };
  }
  handleChangeHeure(e){
    console.log("handleChangeHeure"+e.target.value);
    this.setState({heure: e.target.value},this.calculNombre);
  }

  handleChangeMinutes(e){
    console.log("handleChangeMinutes"+e.target.value);
    this.setState({minutes: e.target.value},this.calculNombre);
  }

  calculNombre(){
    console.log(this.state.heure+"//"+this.state.minutes)
    let minutes = (this.state.minutes == null)? 0 : this.state.minutes;
    let heures = (this.state.heure == null)? 0 : this.state.heure;
    let result = (minutes*100)/60;
    let resultString = ",";
    if(result.toString().indexOf('.') != -1){
      
      resultString += result.toString().substring(0,result.toString().indexOf('.'))

    }else{
      resultString+=result;
    }
    this.setState({nombre: heures+resultString});
  }
  render() {
    return (
      <div>
        <h2>Calcul heure en nombre</h2>
        <p>
          heure :  <input type="text" id="heure" maxlength={2} size={2} value={this.state.heure} onChange={this.handleChangeHeure.bind(this)}/> : <input type="text" id="heure" maxlength={2} maxlenght={2} size={2} value={this.state.minutes} onChange={this.handleChangeMinutes.bind(this)} /><br/>
          decimal :<input type="text" id="nombre" value={this.state.nombre} onChange={this.handleChangeMinutes.bind(this)}/><br/>

        </p>
        <hr/>
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
        <hr/>
        <h2>Calcul aire d'un rectangle</h2>
        <p>
        Longueur :  <input type="text" id="longueur" value={this.state.longueur} onChange={this.handleChangeLongueur.bind(this)} on/><br/>
          Largeur :<input type="text" id="largueur" value={this.state.largueur} onChange={this.handleChangeLargueur.bind(this)}/><br/>
          Aire :<input type="text" value={this.state.aire}/><br/>

        </p>
        <hr/>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
