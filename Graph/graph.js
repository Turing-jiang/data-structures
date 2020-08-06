class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }

  addEdge(a, b) {
    this.adjList[a].push(b);
    this.adjList[b].push(a);
  }

  initStatus() {
    let status = {};
    this.vertices.forEach((item) => (status[item] = "undetected"));
    return status;
  }

  bfs(v, callback) {
    let status = this.initStatus();
    let queue = [];
    queue.push(v);

    while (queue.length !== 0) {
      let cur = queue.shift();
      let edges = this.adjList[cur];
      edges.forEach((edge) => {
        if (status[edge] === "undetected") {
          queue.push(edge);
          status[edge] = "detected";
        }
      });
      status[cur] = "purchased";
      if (callback) callback(cur);
    }
  }
}
