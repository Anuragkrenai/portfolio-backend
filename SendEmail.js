import nodemailer from "nodemailer";

const SendEmail = async (req, res) => {
  const { name, email, message } = req.body;
  const reciever_email = 'techboy9797@gmail.com'
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL || '',
      pass: process.env.SENDER_PASSWORD || '',
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL || '',
      to: reciever_email || '' ,
      subject: "Connection Message",
      text: "Connection Request",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    console.log("Message sent");
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (error) {
      console.log("Failed to send message:");
      res.status(500).json({ success: false, message: "Failed to send message" });
  }
};

export default SendEmail;
