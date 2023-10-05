require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const server = require("./src/server.js");
const { database } = require("./src/database/database.js");

const {
  handlerUsers,
  handlerProducts,
  handlerCategories,
  handlerOrders,
  handlerCards,
} = require("./src/routes");

const { LOCALHOST_PORT, DB_RESET } = process.env;
const dbReset = DB_RESET === "true";

server.use(cors());
server.use(morgan("dev"));

server.use("/moveon/users", handlerUsers);
server.use("/moveon/orders", handlerOrders);
server.use("/moveon/cards", handlerCards);

server.use("/moveon/products", handlerProducts);
server.use("/moveon/categories", handlerCategories);

database
  .sync({ force: dbReset })
  .then(() => {
    server.listen(LOCALHOST_PORT, () => {
      console.log(`Server raised in port: ${LOCALHOST_PORT}`);
    });
  })
  .catch((error) => console.log(error));
