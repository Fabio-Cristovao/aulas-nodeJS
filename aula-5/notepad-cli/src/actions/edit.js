const { title } = require("../io/output")

module.exports = async (cb = null) => {
  title('Update note');

  const name = await userInput('Name: ');
  
}