const httpStatus = require("http-status");

const getBooks = async (req, res) => {
  res.json({
    message: "These are the available books",
  })
} 

const createBook = async (req, res) => {
  const data = req.body;
  res.status(httpStatus.CREATED).json({
    message: "New book created",
    data,
  })
}

module.exports = {
  getBooks,
  createBook,
}