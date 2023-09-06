// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.register(require('./routes/routes'))

// fastify.get('/', function handler (request, reply) {
//   reply.send({ hello: 'world' })
// })

// Run the server!
fastify.listen({ port: 5000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is running on port 5000`)
})