var app = require('express')(); // Create an instance of an Express app
var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('TodoItem'); // Create a Table for 'TodoItem' with default settings

mobileApp.attach(app); // Attach the mobileApp to express
app.listen(process.env.PORT || 3000);