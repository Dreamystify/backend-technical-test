import { Topic } from './types';
import { JSONPath } from 'jsonpath-plus';
import { Data, Year, Subject, Lesson } from './types';

const toProperCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const removeDuplicates = (array: any[], key: string | number): any[] => {
    var check = new Set();
    return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
}

export const task3 = (data: Data): any[] => {
  console.log(`Transforming data task 3`);
 
  const transformedData = [];

  const years: Year[] = removeDuplicates(JSONPath({ path: `$..years[*]`, json: data }), 'name') as Year[];
  for (const year of years) {
        
    const subjects: Subject[] = removeDuplicates(JSONPath({ path: `$..lessons[?(@.years[0].name=='${year.name}')].subjects[*]`, json: data }), 'name') as Subject[];
    for (const subject of subjects) {
            
      const lessons: Lesson[] = JSONPath({ path: `$..lessons[*]`, json: data }) as Lesson[];
      for (const lesson of lessons) {
        if (lesson.years.filter(y => y.name === year.name).length && lesson.subjects.filter(s => s.name === subject.name).length) {
          transformedData.push({
            "Year": `Year ${year.name}`,
            "Subject": subject.name,
            "Lesson": lesson.name
          })
        }
      }
    }
  }

  return transformedData;
};