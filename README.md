# AWS Photobucket
[Intermediate] AWS, S3, Api-Gatway, Lambda, Serverless - Intro into AWS cloud services and Serverless

## Objective

Use your knowledge of AWS Lambda, Amazon S3, Serverless, Amazon API Gateway, and jQuery to make a client side request to a public S3 bucket and dynamically display the contents of the bucket. IE they will be images. 

## Flow of Data
![](https://i.imgur.com/U5im4z0.jpg)


## Prerequisites
  - Basic knowledge of HTTP requests using jQuery.
  - Basic understanding of API's.
  - Basic understanding of JSON.
  - Basic understanding of AWS Lambda
  - Basic understanding of Amazon S3
  - Basic understanding of Amazon API-Gateway
  - Basic understanding of Serverless & CLI
  - Basic understanding of AWS CLI
   
## Setup
 - Fork & clone repo.
 - Npm install ```aws-sdk``` & require in packages.
 - Create HTML, CSS, JS file.
 - Import jQuery library.
 - Do a sanity check in browser.
 - Check if you have AWS CLI and Serverless installed.
 - Configure your AWS CLI with your given credentials.
 - Create aws-nodejs template/boilerplate.

## Tasks
You will be creating a Lambda function that makes a request to a public S3 bucket that is full of random images. From there, you will be creating a client side scripts to render the images when your Lambda function is executed. 

## Steps
1. Build AWS Lambda function that makes a request to the public API bucket `photo-bucket-tmp-prjct`.
Add in the following to your Lambda function:
```
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const params = { Bucket: 'photo-bucket-tmp-prjct'};
```
2. Configure .yml file with cors:
```events:
      - http:
         path: photos
         method: get
         cors:
          origin: '*'
          headers:
            - Content-Type
            - X-Amz-Date
            - Authorization
            - X-Api-Key
            - X-Amz-Security-Token
            - X-Amz-User-Agent
          allowCredentials: false
 ```
 3. Test your AWS Lambda function locally(You should get a response back from the public API bucket). 
 ```
{
    "statusCode": 200,
    "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    },
    "body": "{\"message\":{\"IsTruncated\":false,\"Marker\":\"\",\"Contents\":[{\"Key\":\"random-pictures-1.jpg\",\"LastModified\":\"2017-10-21T23:44:10.000Z\",\"ETag\":\"\\\"2e428e8ae830e4015f0df533b8f006e1\\\"\",\"Size\":71296,\"StorageClass\":\"STANDARD\",\"Owner\":{\"DisplayName\":\"junior+whsdevops\",\"ID\":\"123c07480908fa9b8fc35f1e8bd4325f14e1f29488e2c605c433966d4c4be52b\"}},
 ```
 4. Deploy Serverless
 5. Build client side GET request to your specific Lambda URL
 6. Create a button. When user clicks the button, an ajax request is made to your specific Lambda URL, then dynamically display all the images from the public S3 bucket. 

### Testing
  - Use live-server to test client side scripts

