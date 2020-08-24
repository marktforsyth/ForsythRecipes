// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Recipes from './recipes.json'

export default (req, res) => {
    res.statusCode = 200
    res.json(Recipes)
}
