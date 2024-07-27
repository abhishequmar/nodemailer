const sendMailService = require("../services/sendEmail_service");

const sendMailController = async (req, res) => {
  // Log when the controller is called
  console.log("sendMailController called");

  // Call the sendMailService to send the email
  await sendMailService();

  // Send a response to the client
  res.send("Mail is being sent");
};

module.exports = sendMailController;
