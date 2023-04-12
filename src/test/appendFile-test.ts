import {appendFile} from '../fileApi/appendFile'
import {mkdir} from '../fileApi/mkdir'

const appendTest = async (filename:string, data:any) => {
    const result = await appendFile(filename, data)
    console.log(`append ${result} to ${filename}`)
}

mkdir('./data')
    .then(s => appendTest('./data/hello.txt', '\nHi!!!!!!!!!!!!!!!!!!!!!!'))
    .catch((e: Error | null) => console.log(e?.message))