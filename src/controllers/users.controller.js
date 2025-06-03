const users = [
    { id: 1, name: "Carlos" },
    { id: 2, name: "Santiago" }
  ];
  
  export const getUsers = (req, res) => {
    res.status(200).json(users);
  };
  