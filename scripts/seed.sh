# Nodes
for NODES_FILE in import/*.nodes.*.csv
do
    # Header
    head -n 1 $NODES_FILE |
        sed "s/label/label\:LABEL/" |
        sed "s/node_id/node_id\:ID/" |
        sed "s/\"//g" |
        sed "s/n\.//g" > $NODES_FILE.refined
    # Rows
    tail -n +2 $NODES_FILE |
        sed "s/\[\"\"//" |
        sed "s/\"\"\]//" >> $NODES_FILE.refined
done

# Relationships
for EDGES_FILE in import/*.edges.csv
do
    # Header
    head -n 1 $EDGES_FILE |
        sed "s/START_ID/\:START_ID/" |
        sed "s/END_ID/\:END_ID/" |
        sed "s/TYPE/\:TYPE/" |
        sed "s/\"//g" |
        sed "s/n\.//g" > $EDGES_FILE.refined
    # Rows
    tail -n +2 $EDGES_FILE >> $EDGES_FILE.refined
done

rm -d -r data/databases/graph.db
mkdir data/databases/graph.db
# Import
bin/neo4j-admin import \
    --nodes import/paradise_papers.nodes.address.csv.refined \
    --nodes import/paradise_papers.nodes.entity.csv.refined \
    --nodes import/paradise_papers.nodes.intermediary.csv.refined \
    --nodes import/paradise_papers.nodes.officer.csv.refined \
    --nodes import/paradise_papers.nodes.other.csv.refined \
    --relationships import/paradise_papers.edges.csv.refined \
    --quote "\"" \
    --delimiter , \
    --array-delimiter ";" \
    --multiline-fields=true