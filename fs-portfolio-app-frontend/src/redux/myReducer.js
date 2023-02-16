const initialState = {
    // initial state goes here
  }
  
  const myReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SOME_ACTION':
        // handle the action and update state
        return state;
      default:
        return state;
    }
  };
  
  export default myReducer;
  