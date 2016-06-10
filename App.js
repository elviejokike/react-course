import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text: '',
      red: 0
    };
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value
    })
  }
  render(){
    return (
      <div>
        <NumericInput ref="red" val={+this.state.red} min={0} max={255} step={1} label='Red' update={this.update}/>
        <br/>
      </div>
    )
  }
}

class NumericInput extends React.Component {
  render(){
    return (
        <div>
          <input ref="input" type={this.props.type}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            defaultValue={this.props.val}
            onChange={this.props.update}>
          </input>
            <label>{this.props.label} - {this.props.val}</label>
          </div>
    );
  }
}

NumericInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number','range'])
}

NumericInput.defaultProps = {
  min: 0,
  max: 0,
  step:0,
  val: 0,
  label: '',
  type: 'range'
}

export default App;
