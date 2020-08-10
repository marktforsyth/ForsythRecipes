import React from 'react'

const searchDatabase = (Database, query, dataSection, Button) => {
    let searchResults = []
    let recipeTitleSearchResults = []

    for (let d in Database) {
        let data = Database[d]

        let resultNotAlreadyListed = true
        if (dataSection === 'body' && recipeTitleSearchResults.length !== 0) {
            resultNotAlreadyListed = false
        }

        if (data[dataSection].toUpperCase().includes(
            query.toUpperCase()
        ) && resultNotAlreadyListed) {
            if (dataSection === 'body') {
                searchResults.push(data['title'])
            } else {
                searchResults.push(data[dataSection])
            }

            if (dataSection === 'title') {
                recipeTitleSearchResults.push(data[dataSection])
            }
        }
    }

    const renderHeading = () => {
        if (dataSection === 'title') {
            return <h1>Recipes With Matching <i>Titles</i>:</h1>
        } else if (dataSection === 'body') {
            return <h1>Recipes With Matching <i>Content</i>:</h1>
        } else {
            return <h1>Categories that match:</h1>
        }
    }

    const renderFallbackHeading = () => {
        if (dataSection === 'title') {
            return <h2>No recipes found with matching <i>titles</i>.</h2>
        } else if (dataSection === 'body') {
            return <h2>No recipes found with matching <i>content</i>.</h2>
        } else {
            return <h2>No matching categories found.</h2>
        }
    }

    return (
        searchResults.length !== 0 ? (
            <div className={dataSection !== 'name' ? 'result-section' : null}>
                {renderHeading()}

                {searchResults.map(searchResult => (
                    <div key={'search_res_' + dataSection + searchResult}>
                        <Button name={searchResult} />
                    </div>
                ))}
            </div>
        ) : renderFallbackHeading()
    )
}

export default searchDatabase


// NOTICE: This code is not in use, but it's possible that we'll come back to it later. It sorts the recipes by relavance instead of by alphabeticalness.

// const searchDatabase = (Database, query, placeToSearch) => {
//     let searchResults = []

//     for (let r in Database) {
//         let data = Database[r]

//         if (data[placeToSearch].toUpperCase().includes(
//             query.toUpperCase()
//         )) {
//             let numberOfMatchingLetters = 0
//             data[placeToSearch].split('').forEach(letter => {
//                 if (query.includes(letter)) {
//                     numberOfMatchingLetters += 1
//                 }
//             })

//             let differenceInWordLength = Math.abs(data[placeToSearch].length - query.length)

//             searchResults.push({
//                 result: data[placeToSearch] !== 'body' ? data[placeToSearch] : data['title'],
//                 howCloselyItMatches: numberOfMatchingLetters - differenceInWordLength
//             })
//         }
//     }

//     const sortedSearchResultObjects = searchResults.sort((a, b) => {
//         return b.howCloselyItMatches - a.howCloselyItMatches
//     })

//     let sortedSearchResults = []
//     for (let r in sortedSearchResultObjects) {
//         sortedSearchResults.push(
//             sortedSearchResultObjects[r].result
//         ) 
//     }

//     return sortedSearchResults
// }

// export default searchDatabase