'use strict';
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = { Bucket: 'photo-bucket-tmp-prjct'};


module.exports.hello = (event, context, callback) => {
s3.listObjects(params, function(err, data) {
  const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: data,
      }),
  };
  callback(null, response);
}); 
};
console.log("Are you alive");