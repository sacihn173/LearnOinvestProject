const marketOpen = (state = false, action) => {
  switch (action.type) {
    case "MARKET_OPEN":
      return true;
    case "MARKET_CLOSE":
      return false;
    default:
      return false;
  }
};

export default marketOpen;
