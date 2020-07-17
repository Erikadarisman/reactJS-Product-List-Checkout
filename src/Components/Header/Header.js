import React, { Component } from "react";

import { connect } from "react-redux";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: 0,
    };
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Product List</a>
        <div className="justify-content-end">
          <span className="navbar-text">
            Total Semua Produk: <b>{this.props.Product.total}</b>
          </span>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Product: state.Product,
  };
};

export default connect(mapStateToProps)(Header);
