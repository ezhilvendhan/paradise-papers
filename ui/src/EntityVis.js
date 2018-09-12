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
            Officer(first: 10, offset: 0, orderBy: name_asc) {
              node_id
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            data.Officer
              .slice()
              .map(n => {
                return (
                  <div>{n.name}</div>
                );
              })
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(EntityVis);
