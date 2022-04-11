const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schemas');
// If we use an auth helper, we can add it here
// const { authMiddleware } = require('./utils/auth'); 
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // context: authMiddleware,
    });
    // not 100% sure that we should call the following few lines instead of server.start(); I guess we'll see. (See: https://www.apollographql.com/docs/apollo-server/api/apollo-server/)
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Use graphql at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

// express method (middleware) for recognizing incoming request objects (in POST and PUT requests, and equivalent in graphql assumingly) as strings or arrays.
app.use(express.urlencoded({ extended: false }));
// express method (middleware) for recognizing incoming request objects (in POST and PUT requests--and equivalent mutations in graphql) as JSON objects
app.use(express.json());

// serve up static assets from frontend--IF app is in production environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// will this get us into trouble before the front end is up and running??
app.get('&', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
})
