export const TEST = "TEST";

const initialState = {
  contacts: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(TEST):
      return [];
    default:
      return state;
  }
}

export default reducer;
