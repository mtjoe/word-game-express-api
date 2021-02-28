import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    startGame: Game!
  }

  type Game {
    id: ID!
    size: Grid!
    letters: [String!]!
    combinations: [Combination!]!
  }

  type Combination {
    isAcross: Boolean!
    word: String!
    location: Grid!
  }

  type Grid {
    x: Int!
    y: Int!
  }
`;

module.exports = typeDefs;
