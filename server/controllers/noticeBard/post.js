const { noticeBoard } = require("../../models");

module.exports = async (req, res) => {
  const data = await noticeBoard.findAll();

  res.status(201).send({
    post: data,
  });
};
