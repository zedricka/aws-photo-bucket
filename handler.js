'use strict';
  const AWS = require('aws-sdk');
  const s3 = new AWS.S3();
  const params = { Bucket: 'photo-bucket-tmp-prjct'};

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Mark sucks',
      input: event,
    }),
  };

  callback(null, response);
};

 s3.listObjects(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response


