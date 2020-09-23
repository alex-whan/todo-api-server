const BaseModel = require('./model');
const schema = require('./todos.schema.js');

class Todos extends BaseModel {}

module.exports = new Todos(schema);
