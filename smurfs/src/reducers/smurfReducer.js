const initailState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ],
  isFetching: false,
  error: ""
};
const smurfReducer = (state = initailState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default smurfReducer;
