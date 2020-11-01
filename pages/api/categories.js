import fs from 'fs'

const Categories = JSON.parse(fs.readFileSync('data/categories.json', 'utf8'))

export default (req, res) => {
    const categoriesToExport = Categories

    if (req.method === 'POST' || req.method === 'UPDATE') {
        categoriesToExport[req.body.name] = req.body
        fs.writeFileSync('data/categories.json', JSON.stringify(categoriesToExport), 'utf8')
    } else if (req.method === 'DELETE') {
        delete categoriesToExport[req.query.name]
        fs.writeFileSync('data/categories.json', JSON.stringify(categoriesToExport), 'utf8')
    }

    res.statusCode = 200
    res.json(categoriesToExport)
}