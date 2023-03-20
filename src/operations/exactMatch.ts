export const exactMatch = (value1:never, value2:never) => {
    const matchType = typeof value1
    if(matchType !== typeof value2) return false

    if (matchType === "string") {
        return value1 === value2
    }

    console.log(`No match implementation for type ${matchType}`)
    return false
}