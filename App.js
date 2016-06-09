import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text: "this is my state"
    }

  }
  update(e){
    this.setState({
      text: e.target.value
    })
  }
  render(){
    return (
        <div>
          <h1>Hola, {this.state.text}</h1>
          <input type="text" onChange={this.update.bind(this)}/>
        </div>
    )
  }
}

export default App;
