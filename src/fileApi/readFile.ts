import * as fs from 'fs'

export const readFile = (filename: string) : Promise<any> =>
    new Promise((resolve, rejects) => {
        fs.readFile(filename, 'utf-8', (error: Error | null, data: any) => {
            error ? rejects(error) : resolve(data)
        })
    })