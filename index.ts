import { task1 } from './task1';
import { task2 } from './task2';
import { task3 } from './task3';
import { task4 } from './task4';
import { task5 } from './task5';

const hello = async (): Promise<void> => {
  console.log('Hello World');
  await task1();
  const response = await task2();
  const data = task3(response.data);
  await task4(data);
  await task5();
}
hello();
