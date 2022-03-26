const searchData = (state = {}, action) => {
  switch (action.type) {
    case "LIST_DATA_SENT":
      return action.payload.data;
    default:
      return state;
  }
};

export default searchData;
