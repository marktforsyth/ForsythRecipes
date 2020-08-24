import Categories from './categories.json'

export default (req, res) => {
    res.statusCode = 200
    res.json(Categories)
}