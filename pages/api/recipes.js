// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

import Recipes from './recipes.json'

export default (req, res) => {
    const recipesToExport = Recipes

    if (req.method === 'POST') {
        recipesToExport[req.body.title] = req.body
    }

    res.statusCode = 200
    res.json(recipesToExport)
}
