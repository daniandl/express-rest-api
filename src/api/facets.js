import resource from 'resource-router-middleware'
import facets from '../models/facets'

export default ({ config, db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: 'facet',

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
      console.log(req)
      const facet = facets.find(i => i.id === id)

      const err = facet ? null : 'Not found'
      callback(err, facet)
    },

    /** GET / - List all entities */
    index({ params }, res) {
      res.json(facets)
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
      body.id = facets.length.toString(36)
      facets.push(body)
      return res.json({
        success: true,
        ...body
      })
    },

    /** GET /:id - Return a given entity
     *  facet's value is determined by the
     *  load() method above
     */
    read({ facet }, res) {
      res.json(facet)
    },

    /** PUT /:id - Update a given entity
     *  facet's value is determined by the
     *  load() method above
     */
    update({ facet, body }, res) {
      for (const key in body) {
        if (key !== 'id') {
          facet[key] = body[key]
        }
      }
      res.sendStatus(204)
    },

    /** DELETE /:id - Delete a given entity
     *  facet's value is determined by the
     *  load() method above
     */
    delete({ facet }, res) {
      facets.splice(facets.indexOf(facet), 1)
      res.sendStatus(204)
    }
  })
