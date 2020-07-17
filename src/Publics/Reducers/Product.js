const initialState = {
  productList: [],
  total: 0,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  isFirst: true,
};

const Product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_ALL_PRODUCT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case "GET_ALL_PRODUCT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isFirst: false,
        productList: action.payload.data.map((item) => ({
          ...item,
          jumlah: 0,
        })),
      };

    case "CHANGE_PRODUCT":
      let items, item;
      items = [...state.productList];
      item = { ...items[action.index] };
      item.jumlah =
        action.action === "plus"
          ? (item.jumlah += 1)
          : item.jumlah > 0
          ? (item.jumlah -= 1)
          : item.jumlah;
      items[action.index] = item;
      return {
        ...state,
        productList: items,
        total: state.productList.reduce((a, b) => a + (b["jumlah"] || 0), 0),
      };

    case "BELI_PRODUCT":
      return {
        productList: [],
        total: 0,
        isLoading: false,
        isFulfilled: true,
        isRejected: false,
        isFirst: true,
      };

    default:
      return state;
  }
};

export default Product;
