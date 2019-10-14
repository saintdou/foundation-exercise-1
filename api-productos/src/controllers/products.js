const product = require('../models/products');
const httpStatusCodes = require('http-status');

exports.get = async (req, res) => {
  try {
    let { category } = req.params;

    const result = await product.get(category);

    if (result.length === 0) {
      res.writeHead(httpStatusCodes.NOT_FOUND);
    }

    res.status(httpStatusCodes.OK).json(result);
  } catch (err) {
    console.error(err);
    res.writeHead(httpStatusCodes.INTERNAL_SERVER_ERROR);
  }

  res.end();
  return;
};
