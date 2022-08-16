import converter from 'json-2-csv';
import fs from 'fs';

export const task4 = async (data: any[]): Promise<String> => {
    console.log(`Saving csv data for task 4`);

    const options = {
        prependHeader: true,
        keys: ['Year', 'Subject', 'Lesson'],
    };

    const csv = await converter.json2csvAsync(data, options);
    if (!csv) {
      console.log('Error formatting data.');
    }

    fs.writeFileSync(`./csv/output.csv`, csv);
};