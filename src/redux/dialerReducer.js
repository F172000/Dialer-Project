const currentTime = new Date();
const initialState = [
  {dialedNumber:'023459',id:0,time:currentTime.toLocaleTimeString()}
];

const dialerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIALED_NUMBER':
      return [...state, { id: Date.now(), dialedNumber: action.payload,time:currentTime.toLocaleTimeString() }];
      case 'delete':
        return state.filter((log) => log.id !== action.payload);
    default:
      return state;
  }
};

export default dialerReducer;