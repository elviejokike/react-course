import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val : 0};
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1});
  }
  // component is ready to be rendered (before placed into the DOM)
  // we have access to the state and properties, but not to the DOM
  componentWillMount(){
    this.setState({m: 2})
  }

  render(){
    console.log('rendering !');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }

  // component has been placed into the DOM (Rendered)
  componentDidMount(){
    //console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval (this.update, 500);
  }

  componentWillUnmount(){
    clearInterval(this.inc);
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }
  mount() {
    ReactDOM.render(<App/>, document.getElementById('a'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id='a'></div>
      </div>
    )
  }

}

export default Wrapper;
