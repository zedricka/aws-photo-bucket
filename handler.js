'use strict';
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = { Bucket: 'photo-bucket-tmp-prjct'};

s3.listObjects(params, function(err, data) {
  if (err) console.log(err, err.stack)  // an error occurred
  else console.log(data);           // successful response
});

module.exports.hello = (event, context, callback) => {
console.log("Are you alive");
  const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: 'Testing testing 1 2 3',
        input: event,
      }),
  };

  callback(null, response);
}; 