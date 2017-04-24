let keystone = require('keystone');
let middleware = require('./middleware');
let importRoutes = keystone.importer(__dirname);
let api = require('./../api/index');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
let routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/simulation', middleware.requireUser, routes.views.simulation)
	api.init(app);
};
