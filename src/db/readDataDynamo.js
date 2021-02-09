var AWS = require("aws-sdk");

AWS.config.update({region:"us-east-2", accessKeyId: "AKIAIMW4FAWWZOCPSH7A", secretAccessKey: "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"});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Movies";

var year = 2017;
var title = "The second Big New Movie";

var params = {
    TableName: table,
    Key:{
        "year": year,
        "title": title
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data.Item.info, null, 2));
    }
});