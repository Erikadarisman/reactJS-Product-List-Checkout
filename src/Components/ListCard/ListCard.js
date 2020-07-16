import React, { Component } from "react";
import "./ListCard.css";
import { changeProduct } from "../../Publics/Actions/Products";
import { connect } from "react-redux";

class ListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleUpdate(index, action) {
    this.props.dispatch(changeProduct(index, action));
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-6 col-md-4">
          <span>
            <b>{this.props.data.title}</b>
          </span>
        </div>
        <div className="col-6 col-md-4 count-style">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.handleUpdate(this.props.index, "min")}
            disabled={this.props.disabled}
          >
            -
          </button>
          <input
            type="number"
            className="form-control input-number"
            value={this.props.data.jumlah}
            disabled
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.handleUpdate(this.props.index, "plus")}
            disabled={this.props.disabled}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Product: state.Product,
  };
};

export default connect(mapStateToProps)(ListCard);