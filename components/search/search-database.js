import React from 'react'

const recipeTitleSearchResults = []
let amountOfNoResultSections = 0

const searchDatabase = (Database, query, dataSection, Button) => {
    let searchResults = []

    for (let d in Database) {
        let data = Database[d]

        let resultNotAlreadyListed = true
        if (dataSection === 'body' && recipeTitleSearchResults.includes(data.title)) {
            resultNotAlreadyListed = false
        }

        if (data[dataSection].toUpperCase().includes(
            query.toUpperCase()
        ) && resultNotAlreadyListed) {
            if (dataSection === 'body') {
                searchResults.push(data.title)
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
        amountOfNoResultSections += 1

        if (dataSection === 'title') {
            // return <h2 class='no-results-found-section-heading'>No recipes found with matching <i>titles</i>.</h2>
            return ''
        } else if (dataSection === 'body') {
            return <h2 class='no-results-found-section-heading'>No recipes found with matching <i>content</i>.</h2>
        } else {
            return <h2 class='no-results-found-section-heading'>No matching categories found.</h2>
        }
    }

    const updateNoResultsCount = () => {
        amountOfNoResultSections += 1
    }

    if (dataSection === 'name' && amountOfNoResultSections >= 3) {
        return <h1 class='no-results-found-total'>No results found for <span>{query}</span></h1>
    }

    return (
        searchResults.length !== 0 ? (
            <div className={dataSection !== 'name' ? 'result-section' : null}>
                {renderHeading()}

                <div className={dataSection === 'name' ? 'category-btns-container' : null}>
                    {searchResults.map(searchResult => (
                        <div key={'search_res_' + dataSection + searchResult}>
                            <Button name={searchResult} />
                        </div>
                    ))}
                </div>
            </div>
        ) : updateNoResultsCount() //renderFallbackHeading()
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