import React, { Component } from "react";
import "./ProductList.css";
import { connect } from "react-redux";
import ListCard from "../../Components/ListCard/ListCard";
import { getAllProduct } from "../../Publics/Actions/Products";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    if (this.props.Product.isFirst) {
      await this.props.dispatch(getAllProduct());
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-right martop">
              <Link to="/checkout">
                <button type="button" className="btn btn-warning ">
                  Checkout
                </button>
              </Link>
            </div>
            <div className="martop">
              {this.props.Product.isLoading && <Loading />}
              {this.props.Product.productList.map((item, index) => {
                return <ListCard data={item} index={index} key={item.id} />;
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

export default connect(mapStateToProps)(ProductList);
