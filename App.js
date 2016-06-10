import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [
        {id:1, name: "Leo Messi"}, {id:2, name:"Roger Federer"},
        {id:3, name: "Nairo Quinatana"}, {id:4, name:"Verstappen"}
      ]
    };
  }
  render(){
    let rows = this.state.data.map ( person => {
      // key is needed for sibling elements
      return <Person key={person.id} data={person}></Person>
    })
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

const Person = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}

export default App;
