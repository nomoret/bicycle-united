const USER_LOGIN = "USER_LOGIN";

// function setUserLogin()

const initialState = {
  isLoggedIn: false
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // case typeName:
    //   return { ...state, ...payload };

    default:
      return state;
  }
}

export default reducer;
