const { actor } = require("../../models");

export const search = async (req, res) => {
  const search = await actor
    .findOne({
      where: { actorName: req.query },
    })
    .then((data) => {
      const payload = {
        id: data.dataValues.id,
        actorid: data.dataValues.actorid,
        actorName: data.dataValues.actorName,
        actorImage: data.dataValues.actorImage,
      };
    });
  res.status(200).send({ payload });
};

export const add = async (req, res) => {
  try {
    const { id } = req.body.userData;
    const { actorName, content } = req.body;

    const newAdd = await actorPost.create({
      userId: id,
      actorName,
      content,
    });

    newAdd.save();
    res.status(201).json({ message: "Your request is successfully updated" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: err });
  }
};
