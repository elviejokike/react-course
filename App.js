import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      val: 0
    }
  }
  update(){
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount(){
    console.log('mounting');
  }
  componentDidMount() {
    console.log('mounted');
  }
  render() {
    return (
      <InnerComponent update= {this.update}
      {...this.state}
      {...this.props}/>
    )
  }
}

const Button = (props) => <button onClick={props.update}>{props.text} - {props.val}</button>
const Label = (props) => <label onMouseMove={props.update}>{props.text} - {props.val}</label>

// save state, same functionality .. (decoupling functionality from component)
let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {

  render(){
    return (
      <div>
        <ButtonMixed text="Button"/>
        <LabelMixed text="Button"/>
      </div>
    )
  }


}



export default App;
