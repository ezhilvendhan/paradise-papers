import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./EntityVis.css";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 700
  }
});

class EntityVis extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query
        query={gql`
          {
            path(person1: "Tillerson - Rex", person2: "The Duchy of Lancaster") {
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            data.shortestPath
              .slice()
              .map(n => {
                return (
                  n.name
                );
              })
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(EntityVis);
