import React from "react";

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;
    console.log("incoming", smurf.name);
    return (
      <div data-testid="smurf" className="card">
        <h4> Name: {smurf.name} </h4>
        <br />
        <p>Nickname: {smurf.nickname}</p>
        <br />
        <p> Position: {smurf.position}</p>
        <br />
        <p>Description: {smurf.description}</p>
      </div>
    );
  }
}
export default Smurf;

//Task List:
//1. Access smurfs to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurfs as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
