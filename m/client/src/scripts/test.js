const Test = (req, res) => {
  const user = {
    id: 1337,
    name: "John Doe",
    company: "Acme Inc.",
  };
  res.status(200).json(user);
};

export default Test;