// TodoItem.js
var todoTable = require('azure-mobile-apps').table('TodoItem');
todoTable.authorise = true;
// Export our table
module.exports = todoTable;
//todoTable.columns = {"text":"string", "complete":"boolean"} //Dynamic schema will create these for us. It's on by default.
todoTable.dynamicSchema = true; // this is the default setting

todoTable.read(function(context){
  return context.execute();
});
// TodoItem.js continued
// Attach a user id to the item that was inserted
table.insert(function (context) {
  context.item.user = context.user.id;
  return context.execute();
});

// Only return items where the user id matches the current user
table.read(function (context) {
  context.query.where({
    user: context.user.id
  });
  return context.execute();
});