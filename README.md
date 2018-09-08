- Install Neo4J
- Set your Neo4j connection string and credentials in `.env`. For example:
    *.env*

    ```
    NEO4J_URI=bolt://localhost:7687
    NEO4J_USER=neo4j
    NEO4J_PASSWORD=letmein
    ```

    Note that grand-stack-starter does not currently bundle a distribution of Neo4j. You can download [Neo4j Desktop](https://neo4j.com/download/) and run locally for development, spin up a [hosted Neo4j Sandbox instance](https://neo4j.com/download/), run Neo4j in one of the [many cloud options](https://neo4j.com/developer/guide-cloud-deployment/), or [spin up Neo4j in a Docker container](https://neo4j.com/developer/docker/). Just be sure to update the Neo4j connection string and credentials accordingly in `.env`.
- Download the paradise papers dataset and import them using `scripts/seed.sh`
- To Setup:
  - `cd api && npm i`
  - `cd ui && npm i`
- To run:
  - `cd api && npm start`
  - `cd ui && npm start`