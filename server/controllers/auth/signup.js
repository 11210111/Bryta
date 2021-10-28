const { user } = require("../../models");

module.exports = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.sendStatus(404);
  } else {
    const userInfo = await user.findOne({
      where: {
        username,
      },
    });
    if (userInfo.username) {
      res.status(404).send({ message: "email exists" });
    } else {
      await user
        .create({
          username,
          email,
          password,
        })
        .then(() => {
          res.sendStatus(201);
        });
    }
  }
};
