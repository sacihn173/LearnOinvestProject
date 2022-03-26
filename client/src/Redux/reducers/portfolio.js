const portfolio = (state = [], action) => {
  switch (action.type) {
    case "GOT_PORTFOLIO_DATA":
      return action.payload.data;
    default:
      return state;
  }
};

export default portfolio;
