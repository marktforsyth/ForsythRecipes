// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import fs from 'fs'

import Recipes from './recipes.json'

export default (req, res) => {
    const recipesToExport = Recipes

    if (req.method === 'POST') {
        recipesToExport[req.body.title] = req.body
    }

    res.statusCode = 200
    res.json(recipesToExport)

    // console.log(fs.readFileSync('categories.json', 'utf8'))
}

// export async function getStaticProps() {
//     console.log(fs.readFileSync('/categories.json', 'utf8'))
// }