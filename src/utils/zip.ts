export const zip = (keys:string[], values:any[]) => {
    const makeObject = (key:string, value:any) => ({[key]:value})
    const margeObject = (a:any[]) => a.reduce((a, b) => ({...a, ...b}))

    let tmp = keys
        .map((key:string, index:number) => [key, values[index]])
        .filter(a => a[0] && a[1])
        .map(a => makeObject(a[0], a[1]))
    return margeObject(tmp)
}