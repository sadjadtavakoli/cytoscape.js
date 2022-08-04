import * as util from '../../util/index.js';
import bfsDfs from './bfs-dfs.js';
import dijkstra from './dijkstra.js';
import kruskal from './kruskal.js';
import aStar from './a-star.js';
import floydWarshall from './floyd-warshall.js';
import bellmanFord from './bellman-ford.js';
import kargerStein from './karger-stein.js';
import pageRank from './page-rank.js';
import degreeCentrality from './degree-centrality.js';
import closenessCentrality from './closeness-centrality.js';
import betweennessCentrality from './betweenness-centrality.js';
import markovClustering from './markov-clustering.js';
import kClustering from './k-clustering.js';
import hierarchicalClustering from './hierarchical-clustering.js';
import affinityPropagation from './affinity-propagation.js';
import hierholzer from './hierholzer.js';
import hopcroftTarjanBiconnected from './hopcroft-tarjan-biconnected.js';
import tarjanStronglyConnected from './tarjan-strongly-connected.js';

var elesfn = {};

[
  bfsDfs,
  dijkstra,
  kruskal,
  aStar,
  floydWarshall,
  bellmanFord,
  kargerStein,
  pageRank,
  degreeCentrality,
  closenessCentrality,
  betweennessCentrality,
  markovClustering,
  kClustering,
  hierarchicalClustering,
  affinityPropagation,
  hierholzer,
  hopcroftTarjanBiconnected,
  tarjanStronglyConnected
].forEach(function(props) {
  util.extend(elesfn, props);
});

export default elesfn;
