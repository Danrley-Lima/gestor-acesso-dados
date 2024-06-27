import csvParser from 'csv-parser';
import { Readable } from 'stream';

interface IConverterCSVtoJSON {
    csvData: string;
}

export class ConverterCSVtoJSON {
    execute({ csvData }: IConverterCSVtoJSON): Promise<any> {
        return new Promise((resolve, reject) => {
            const results: any[] = [];
            const readableStream = Readable.from([csvData]); 

            readableStream
                .pipe(csvParser())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    resolve(results);
                })
                .on('error', (error) => reject(error));
        });
    }
}
