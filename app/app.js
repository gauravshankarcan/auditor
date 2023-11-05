// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.all('/', function handler (request, reply) {
  console.log(request.body)  
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})