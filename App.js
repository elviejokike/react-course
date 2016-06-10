import React from 'react';

class App extends React.Component {
  render(){
    return <Button> Click to Pay <Heart/></Button>
  }
}

class Button extends React.Component {
  render(){
    return (
        <button>{this.props.children}</button>
    );
  }
}

const Heart = () => <span>	&#9825; </span>

export default App;
