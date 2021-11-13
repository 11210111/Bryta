const { user } = require("../../models");

module.exports = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    res.sendStatus(404);
  } else {
    const userInfo = await user.findOne({
      where: {
        email,
      },
    });
    if (userInfo) {
      res.status(404).send({ message: "email exists" });
    } else {
      await user
        .create({
          email,
          username,
          password,
        })
        .then(() => {
          res.sendStatus(201);
        });
    }
  }
};
