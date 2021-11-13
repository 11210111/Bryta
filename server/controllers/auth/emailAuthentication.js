const nodemailer = require("nodemailer");
const { user } = require("../../models");

module.exports = async (req, res) => {
  const { email } = req.body;
  const emailInfo = await user.findOne({
    where: {
      email,
    },
  });
  try {
    if (emailInfo) {
      res.status(404).send({ message: "email already exists" });
    }
    const generateRandomCode = (n) => {
      let str = "";
      for (let i = 0; i < n; i++) {
        str += Math.floor(Math.random() * 10);
      }
      return str;
    };

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const verificationCode = generateRandomCode(6);

    const mailOptions = {
      from: `"Bryta Team" <${process.env.NODEMAILER_USER}>`,
      to: req.body.email,
      subject: `[Bryta] 이메일 인증번호를 입력해주세요`,
      html: `<div style="padding:10px 10px 0;"><h2 style="color:black;">이메일 인증을 완료하시려면 <b>인증번호</b>를 입력해주세요.</h2><h3 style="color:black;">인증번호를 입력하셔야만 이메일 인증이 완료됩니다.</h3> <h3 style="margin-bottom:130px">Bryta 인증번호 : ${verificationCode}</h3></div>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
      res.send({ data: info });
      console.log(info);
    });
    return res.status(200).json({
      data: {
        verificationCode,
      },
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
