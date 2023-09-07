const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:Deltaforc1@cluster0.dns4ylm.mongodb.net/socialNetworkDB');

module.exports = connection;