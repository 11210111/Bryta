const { user } = require("../../models");

module.exports = async (req, res) => {
  const { ID, email, password } = req.body;
  if (!ID || !email || !password) {
    res.sendStatus(404);
  } else {
    const [result, created] = await user.findOrCreate({
      where: { ID },
      defaults: {
        ID,
        email,
        password,
      },
    });
    if (!created) {
      res.send({ message: "email exists" });
    } else {
      res.status(201).send(result);
    }
  }
};
