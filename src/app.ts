import express = require("express");
import cookieParser = require("cookie-parser");
import ApolloServer = require("apollo-server-express");
import logger = require("morgan");
import compression = require("compression");
import cors = require("cors");

const port = 8080;
const app = express();
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

app.use("*", cors());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = new ApolloServer.ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
