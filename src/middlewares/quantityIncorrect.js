const quantityIncorrect = (req, res, next) => {
  const { body } = req;
  const result = body.some((ele) => !Object.prototype.hasOwnProperty.call(ele, 'quantity'));
  if (result) return res.status(400).json({ message: '"quantity" is required' });
  const wrongLengthResult = body.some((ele) => ele.quantity <= 0);
  if (wrongLengthResult) {
  return res.status(422)
    .json({ message: '"quantity" must be greater than or equal to 1' }); 
  }
  next();
};

module.exports = {
  quantityIncorrect,
};