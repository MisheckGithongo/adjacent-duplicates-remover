const testStr = process.argv[2]

function adjacentDupRemover(s) {
    const holder = []

    for (let i = 0; i < s.length; i++) {
        if (holder[holder.length - 1] === s[i]) {
            holder.pop()
        } else {
            holder.push(s[i])
        }
    }

    return holder.join('')
}

if (!testStr) {
    console.log('Pass a test string')
} else {
    console.log(`String without adjacent duplicates: ${adjacentDupRemover(testStr)}`)
}



module.exports = adjacentDupRemover