import React from "react";
import { getSmurfs } from "./../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class SmurfDisplay extends React.Component {
  render() {
    const { smurfs } = this.props;
    console.log("outgoing", smurfs);
    return (
      <div>
        <button onClick={this.props.getSmurfs}>Test</button>
        {smurfs[0].map((smurf) => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
