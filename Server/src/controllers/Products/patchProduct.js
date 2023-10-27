require("dotenv").config();
const { Product } = require("../../database/database.js");

const patchProduct = async (idProduct, newData) => {
  const product = await Product.findOne({ where: { idProduct } });

  if (!product)
    throw new Error("The Product You Are Trying to Update Doesn't Exist!");

  let hasChanges = false;

  for (const key in newData) {
    if (newData.hasOwnProperty(key) && product[key] !== newData[key]) {
      product[key] = newData[key];
      hasChanges = true;
    }
  }

  if (hasChanges) await product.update(newData);

  return product;
};

module.exports = patchProduct;
