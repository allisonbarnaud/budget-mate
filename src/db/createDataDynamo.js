var AWS = require("aws-sdk");

var fs = require('fs');

var docClient = new AWS.DynamoDB.DocumentClient();

// var params = {
//     TableName:table,
//     Item:{
//         "year": year,
//         "title": title,
//         "info":{
//             "plot": "some stuff happens.",
//             "rating": 1
//         }
//     }
// };

// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Added item:", params.Item.title);
//     }
// });

module.exports = docClient 