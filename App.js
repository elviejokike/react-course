import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
        <div>
          <h1>{this.props.text}</h1>
        </div>
    )
  }
}

App.propTypes = {
  text: React.PropTypes.string,
  value: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: 'This is the default'
}

ReactDOM.render(
    <App text='this is my first property' value={10}/>,
    document.getElementById('app')

)