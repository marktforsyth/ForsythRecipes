// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

const Recipes = JSON.parse(fs.readFileSync('data/recipes.json', 'utf8'))

export default (req, res) => {
    const recipesToExport = Recipes

    if (req.method === 'POST') {
        recipesToExport[req.body.title] = req.body
        fs.writeFileSync('data/recipes.json', JSON.stringify(recipesToExport), 'utf8')
    }

    res.statusCode = 200
    res.json(recipesToExport)

    // console.log(fs.readFileSync('categories.json', 'utf8'))
}

// export async function getStaticProps() {
//     console.log(fs.readFileSync('/categories.json', 'utf8'))
// }