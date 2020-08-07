// NOTICE: This file & folder is not in use, but it's possible that we'll come back to it later. It sorts the recipes by relavance instead of by alphabeticalness.

const searchDatabase = (Database, query, placeToSearch) => {
    let searchResults = []

    for (let r in Database) {
        let data = Database[r]

        if (data[placeToSearch].toUpperCase().includes(
            query.toUpperCase()
        )) {
            let numberOfMatchingLetters = 0
            data[placeToSearch].split('').forEach(letter => {
                if (query.includes(letter)) {
                    numberOfMatchingLetters += 1
                }
            })

            let differenceInWordLength = Math.abs(data[placeToSearch].length - query.length)

            searchResults.push({
                result: data[placeToSearch] !== 'body' ? data[placeToSearch] : data['title'],
                howCloselyItMatches: numberOfMatchingLetters - differenceInWordLength
            })
        }
    }

    const sortedSearchResultObjects = searchResults.sort((a, b) => {
        return b.howCloselyItMatches - a.howCloselyItMatches
    })

    let sortedSearchResults = []
    for (let r in sortedSearchResultObjects) {
        sortedSearchResults.push(
            sortedSearchResultObjects[r].result
        ) 
    }

    return sortedSearchResults
}

export default searchDatabase