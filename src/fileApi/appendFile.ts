import * as fs from 'fs'

export const appendFile = (filename: string, data: any): Promise<any> => 
    new Promise((resolve, rejects) => {
        fs.appendFile(filename, data, 'utf-8', (error: Error | null) => {error ? rejects(error) : resolve(data)})
    })
