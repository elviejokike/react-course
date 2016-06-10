import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      increasing: false
    }
  }
  update(){
    ReactDOM.render(<App value={this.props.value + 1}/>, document.getElementById('app'));
  }
  // give the possibility to decide whether rendering must be done or not (for efficiency)
  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing : nextProps.value > this.props.value
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value % 5 === 0 ;
  }

  render(){
    console.log(this.state.increasing);
    return <button onClick={this.update}>{this.props.value}</button>
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }

}

App.defaultProps = {
  value : 0
}



export default App;
