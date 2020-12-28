import fs from 'fs'

const Recipes = JSON.parse(fs.readFileSync('data/recipes.json', 'utf8'))

export default (req, res) => {
    const recipesToExport = Recipes

    if (req.method === 'POST') {
        recipesToExport[req.body.title] = req.body

        fs.writeFileSync('data/recipes.json', JSON.stringify(recipesToExport), 'utf8')
    } else if (req.method === 'PATCH') {
        recipesToExport[req.body.title].title = req.body.title
        recipesToExport[req.body.title].body = req.body.body
        recipesToExport[req.body.title].modified = req.body.modified
    } else if (req.method === 'DELETE') {
        delete recipesToExport[req.query.title]
        fs.writeFileSync('data/recipes.json', JSON.stringify(recipesToExport), 'utf8')
    }

    res.statusCode = 200
    res.json(recipesToExport)
}