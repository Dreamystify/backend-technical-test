import fetch from 'node-fetch';
import { Response } from './types';

export const task2 = async (): Promise<Response> => {
  console.log(`Fetching data for task 2`);

  const url = `https://api2.inquisitive.com/latest/graphql`; 
     
  const body = JSON.stringify({
      "operationName": "ContentBrowser",
      "query": "query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}",
      "variables": {
        "input": {
          "years": ["1", "2", "3", "4"],
          "subjects": ["history", "science-and-technology", "english", "maths"],
          "curriculums": [],
          "includingDraft": false,
          "includingComingSoon": false,
          "includingFuture": false,
          "includingEmptyTopic": false,
          "initialTopics": 10,
          "topicIds": []
        }
      }
  });

  const options = {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      }
  };

  return fetch(url, options)
    .then(res => res.json())
    .catch((err: Error) => console.log(err));
};