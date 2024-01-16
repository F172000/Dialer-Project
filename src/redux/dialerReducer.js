
const initialState = [
  {dialedNumber:'023459',id:0}
];

const dialerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DIALED_NUMBER':
      return [...state, { id: Date.now(), dialedNumber: action.payload }];
    case 'Add_Number':
      return [
        ...state,
        { id: Date.now(), dialedNumber: action.payload },
      ];
      case 'Remove_Number':
        const updatedState = [...state];
        const lastEntryIndex = updatedState.length - 1;
  
        if (lastEntryIndex >= 0) {
          const lastEntry = { ...updatedState[lastEntryIndex] };
          lastEntry.dialedNumber = lastEntry.dialedNumber.slice(0, -1);
          updatedState[lastEntryIndex] = lastEntry;
        }
  
        return updatedState;
      case 'delete':
        return state.filter((log) => log.id !== action.payload);
    default:
      return state;
  }
};

export default dialerReducer;