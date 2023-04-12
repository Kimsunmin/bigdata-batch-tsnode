import {readFile} from '../fileApi/readFile'

const readTest = async (filename: string) => {
    const result = await readFile(filename)
    console.log(`read ${result} from ${filename} file.`)
}

readTest('./data/hello.txt')
    .then(s => readTest('./data/test.json'))
    .catch((e: Error | null) => console.log(e?.message))