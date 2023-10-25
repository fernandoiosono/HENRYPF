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
	handlerStripe, 
	handlerShoppingCart} = require('./src/routes');

const { PORT, DB_RESET } = process.env;
const dbReset = (DB_RESET === "true");

server.use(cors(
	{
		// origin: "https://henrypf-production-c75d.up.railway.app",
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
	  }
));

server.use(morgan("dev"));

server.use('/moveon/users', handlerUsers);
server.use('/moveon/orders', handlerOrders);
server.use('/moveon/products', handlerProducts);
server.use('/moveon/shoppingcart', handlerShoppingCart);
server.use('/moveon/categories', handlerCategories);
server.use('/moveon/stripe', handlerStripe);

database.sync({ force: dbReset })
	.then(async () => {
		try {
			await loadCategories();
			await loadProducts();
			await loadUsers();
		} catch (error) {
			console.log(`Error Loading Data in the Database > ${error}`);
		}

		server.listen(PORT, () => {
			console.log(`Server raised in port: ${PORT}`);
		});
	})
	.catch((error) => console.log(error));