import { neo4jgraphql } from "neo4j-graphql-js";

export const typeDefs = `
type address {
  node_id: ID!
  name: String
  address: String
  country_codes: [String]
  countries: [String]
  sourceID: String
  valid_until: String
  note: String
}

type entity {
  node_id: ID!
  name: String
  jurisdiction: String
  jurisdiction_description: String
  country_codes: [String]
  countries: [String]
  incorporation_date: String
  inactivation_date: String
  struck_off_date: String
  closed_date: String
  ibcRUC: String
  status: String
  company_type: String
  service_provider: String
  sourceID: String
  valid_until: String
  note: String
}

type intermediary {
  node_id: ID!
  name: String
  country_codes: [String]
  countries: [String]
  sourceID: String
  valid_until: String
  note: String
}

type officer {
  node_id: ID!
  name: String
  country_codes: [String]
  countries: [String]
  status: String
  sourceID: String
  valid_until: String
  note: String
}

type other {
  node_id: ID!
  name: String
  country_codes: [String]
  countries: [String]
  sourceID: String
  valid_until: String
  note: String
}

union SearchResult = officer | entity

type Query {
  path(person1: String!, person2: String!): [SearchResult]
     @cypher(statement: "MATCH p=shortestPath((p1:Officer)-[*]-(p2:Officer)) WHERE p1.name = $person1 AND p2.name = $person2 RETURN p")
}
`;

export const resolvers = {
  Query: {
    path: neo4jgraphql
  }
};
