import React, { Component } from "react";

import "./CheckOut.css";

import { connect } from "react-redux";

import ListCard from "../../Components/ListCard/ListCard";
import { beliProduct } from "../../Publics/Actions/Products";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.Product.productList.filter((x) => x.jumlah > 0),
    });
  }

  handleBeli() {
    console.log("beli");
    this.props.dispatch(beliProduct());
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-right martop">
              <button
                style={{ marginRight: "10px" }}
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => this.handleBeli()}
              >
                Beli
              </button>
            </div>
            <div className="martop">
              {this.state.data.map((item, index) => {
                return (
                  <ListCard
                    data={item}
                    index={index}
                    key={item.id}
                    disabled={true}
                  />
                );
              })}
            </div>
          </div>
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

export default connect(mapStateToProps)(CheckOut);
