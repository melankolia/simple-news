const initialState = {
    DataNews: [],
    isPending: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const NewsReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "GET_NEWS_PENDING":
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false
        };
      case "GET_NEWS_REJECTED":
        return {
          ...prevState,
          isPending: false,
          isRejected: true
        };
      case "GET_NEWS_FULFILLED":
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          DataNews: action.payload.data,
        };
      default:
        return prevState;
    }
  };
  
  export default NewsReducer;