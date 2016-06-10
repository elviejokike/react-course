import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text: ''
    };
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      text: e.target.value
    })
  }
  render(){
    return (
      <div>
        <Widget text={this.state.text} update={this.update}/>
        <Widget text={this.state.text} update={this.update}/>
      </div>
    )
  }
}

const Widget = (props) => {
  return (
      <div>
        <h1>Hola, {props.text}</h1>
        <input type="text" onChange={props.update}/>
      </div>
  );
}

export default App;
