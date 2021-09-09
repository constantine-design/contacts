export const WRITE_FORM = "WRITE_FORM";
export const CLEAN_FORM = "CLEAN_FORM";

const initialState = {};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(WRITE_FORM):
      return payload;
    case(CLEAN_FORM):
      return {};
    default:
      return state;
  }
}
export default reducer;
