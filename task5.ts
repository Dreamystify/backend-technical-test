import * as dotenv from 'dotenv';
import { S3 } from 'aws-sdk';
import fs from 'fs';

export const task5 = async (): Promise<void> => {
  console.log(`Uploading csv to s3 for task 5`);
  dotenv.config();

  const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const params = {
    Bucket: 'inquisitive-backend-developer-tests',
    Key: 'Corey-Lylyk/output.csv',
    Body: fs.readFileSync('./csv/output.csv')
  };

  s3.putObject(params, function (err: Error, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(`successfully uploaded file`);
    }
  });
}