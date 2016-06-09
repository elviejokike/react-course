import React from 'react';

class App extends React.Component {
  render(){
    return <h1>Hello People</h1>
    // JSX for
    // return React.createElement('h1', null, 'Hello Everyone');
    // Where the second argument are properties and the third argument is for inner element/string.
  }
}

// stateless component alternative:
// const App = () => <h1>Hello digilabs </h1>

export default App;
