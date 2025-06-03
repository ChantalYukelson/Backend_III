const adoptions = [];

export const getAdoptions = (req, res) => {
  res.status(200).json(adoptions);
};

export const createAdoption = (req, res) => {
  const { name, product } = req.body;
  if (!name || !product) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  const newAdoption = { id: adoptions.length + 1, name, product };
  adoptions.push(newAdoption);
  res.status(201).json(newAdoption);
};
