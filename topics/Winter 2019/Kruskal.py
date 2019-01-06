### Kruskal's ###
# Takes in the number of nodes and the edge 
# list of the graph. Returns the cost and edges used
# to build minimum spanning tree (MST)
def kruskal(n, graph):
    
    
    # roots will help to check if 2 nodes are
    # already connected
    roots = [i for i in range(n)]
    edgesUsed = []
    cost = 0

    # greedy : gets the cheapest edges first
    graph = sorted(graph, key=lambda t: t[2])    
    
    for edge in graph:
        
        x = root(edge[0], roots)
        y = root(edge[1], roots)
        
        # if not in same connected graph
        if x!=y:
            # join the nodes
            roots[x] = roots[y]
            cost += edge[2]
            edgesUsed += [edge]
            
    return (cost,edgesUsed)
        

# Helper Function
def root(x, roots):
    while roots[x] != x:
        roots[x] = roots[roots[x]]
        x = roots[x]
    return x


def start():
    
    """
    Example (DIRECTED, WEIGHTED):
    
    Graph (x -> y = cost):
    
    0 -> 1 = 2
    1 -> 0 = 3
    1 -> 2 = 7
    1 -> 3 = 6
    2 -> 4 = 5
    2 -> 0 = 1
    3 -> 4 = 7
    4 -> 0 = 4
    
    Minimum Cost to build connected graph:
    13
    
    MST:
    2 -> 0 = 1
    0 -> 1 = 2
    4 -> 0 = 4
    1 -> 3 = 6
    
    """
    
    # graph[0] : start index
    # graph[1] : end index
    # graph[2] : cost
    n = 5
    graph = [[0,1,2],[1,0,3],[1,2,7],[1,3,6],
             [2,4,5],[2,0,1],[3,4,7],[4,0,4]]
    print(kruskal(5,graph))

start()