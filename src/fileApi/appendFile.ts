import * as fs from 'fs'

export const appendFile = (filename: string, data: any, newLine: string='\n'): Promise<any> => 
    new Promise((resolve, rejects) => {
        fs.appendFile(filename, newLine + data, 'utf-8', (error: Error | null) => {error ? rejects(error) : resolve(data)})
    })
