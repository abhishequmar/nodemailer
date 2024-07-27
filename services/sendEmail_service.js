const nodemailer = require("nodemailer");

const sendMailService = async () => {
  try {
    console.log("sendMailService called");

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "temp@ethereal.email",
        pass: "temp_pass",
      },
    });

    // Function to send an email
    async function main() {
      console.log("main called");

      // Send mail with the defined transport object
      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "receiver@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    // Call the main function to send the email
    main().catch(console.error);
  } catch (error) {
    console.error("Error in sendMailService:", error);
  }
};

module.exports = sendMailService;
