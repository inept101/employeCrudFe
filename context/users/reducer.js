const userLogin = (state, action) => {
  const newJwt = action.value.token;
  const userName = action.value.user.name;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("jwt", newJwt);
    window.localStorage.setItem("userName", userName);
  }
  return {
    ...state,
    jwt: newJwt,
    isLoggedIn: true,
    userName,
  };
};

const Logout = (state) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("userName");
  }
  return {
    ...state,
    jwt: undefined,
    isLoggedIn: false,
    userName: undefined,
  };
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLoggedIn: action.value };
    case "USER_LOGIN":
      return userLogin(state, action);
    case "LOGOUT":
      return Logout(state);
    default:
      return state;
  }
};
