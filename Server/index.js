require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const server = require('./src/server.js');
const { database } = require('./src/database/database.js');

const { loadCategories,
	loadProducts,
	loadUsers } = require('./src/database/loaders');

const { handlerUsers, 
	handlerProducts,
	handlerCategories,
	handlerOrders,
	handlerCards,
	handlerShoppingCart } = require('./src/routes');

const { LOCALHOST_PORT, DB_RESET } = process.env;
const dbReset = (DB_RESET === "true");

server.use(cors());
server.use(morgan("dev"));

server.use('/moveon/users', handlerUsers);
server.use('/moveon/cards', handlerCards);
server.use('/moveon/orders', handlerOrders);
server.use('/moveon/products', handlerProducts);
server.use('/moveon/categories', handlerCategories);
server.use('/moveon/shoppingcart', handlerShoppingCart);

database.sync({ force: dbReset })
	.then(async () => {
		try {
			await loadCategories();
			await loadProducts();
			await loadUsers();
		} catch (error) {
			console.log(`Error Loading Data in the Database > ${error}`);
		}

		server.listen(LOCALHOST_PORT, () => {
			console.log(`Server raised in port: ${LOCALHOST_PORT}`);
		});
	})
	.catch((error) => console.log(error));