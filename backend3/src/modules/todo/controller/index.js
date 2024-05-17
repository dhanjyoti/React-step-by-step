const controller = {};

controller.getUser = () => {
  // fetch data from databse and return it.
  return {
    name: "Dj",
  };
};

controller.setUser = (user) => {
  // save this user to database and return updated user.
  return user;
};

export default controller;
