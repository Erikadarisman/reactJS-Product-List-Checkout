import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-12 text-center" style={{ marginTop: "150px" }}>
          <div className="spinner-border"></div>
        </div>
      </div>
    );
  }
}

export default Loading;
