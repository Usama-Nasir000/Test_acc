
async function route(fastify,options,done){
    
      fastify.post('/new_item', async (request, reply) => {
        const data = request.body; // Access the JSON data sent in the POST request
        // Process the data and perform necessary operations
        console.log("!!!!!!!!!!!!!!")
        return { message: 'Data received and processed successfully' };
      });
      // fastify.get('/', function handler (request, reply) {
      //     reply.send({ hello: 'world' })
      //   })
      
    done()
    }
    
    
      module.exports = route