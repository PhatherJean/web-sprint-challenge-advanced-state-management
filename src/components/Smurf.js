import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class Smurf extends React.Component {
  render() {
    const { smurfs } = this.props;

    return (
      <div data-testid="smurfs" className="card">
        Name:{smurfs[0].name}
        <br />
        Nickname:{smurfs[0].nickname}
        <br />
        Position:{smurfs[0].position}
        <br />
        Description:{smurfs[0].description}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};
export default connect(mapStateToProps, { getSmurfs })(Smurf);

//Task List:
//1. Access smurfs to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurfs as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
