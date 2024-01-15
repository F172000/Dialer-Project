
const initialState = {
  dialedNumber: '',
  count:0,
};

const dialerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIALED_NUMBER':
      return {
        ...state,
        dialedNumber: action.payload,
        count:state.count+1,
      };
    case 'Add_Number':
      return {
        ...state,
        dialedNumber:action.payload,
      }
      case 'Remove_Number':
        return {
          ...state,
          dialedNumber:action.payload,
        }
      case 'delete':
        return {
          ...state,
          count:action.payload,
        }
    default:
      return state;
  }
};

export default dialerReducer;