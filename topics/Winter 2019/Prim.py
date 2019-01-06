from heapq import *

### Prim's ###
# Takes in the number of nodes and the edge 
# list of the graph. Returns the cost and edges used
# to build minimum spanning tree (MST)
def prim(n, g):
    
    graph = [[] for _ in range(n)]
    
    for edge in g: 
        ## FORMAT
        # i           : start index
        # graph[i][0] : cost
        # graph[i][1] : start index
        # graph[i][2] : end index        
        graph[edge[0]].append((edge[2],edge[0],edge[1]))
        graph[edge[1]].append((edge[2],edge[1],edge[0]))
    
    # use priority_queue to keep track of the cheapest edge
    marked = [False for _ in range(n)]
    priority_queue = []
    min_cost = 0
    heappush(priority_queue, (0,0,0))
    edges_used = []
    
    while priority_queue!=[]:
        
        (cost,ori,node) = heappop(priority_queue)
        
        # if unvisited, add cheapest edge
        if not marked[node]:
            min_cost += cost
            edges_used.append([ori,node,cost])
            marked[node] = True

        # add edges to unvisited nodes
        for edge in graph[node]:
            dest = edge[2]
            if not marked[dest]:
                heappush(priority_queue, tuple(edge))
        
    
    # if not all nodes are connected
    if sum(marked)!=n: return -1
    
    # get rid of initial value
    edges_used.pop(0)       
    return (min_cost,edges_used)


def start():
    
    """
    Example (UNDIRECTED, WEIGHTED):
    
    Graph (x -> y = cost):
    
    0 <-> 1 = 2
    1 <-> 2 = 7
    1 <-> 3 = 6
    2 <-> 4 = 5
    2 <-> 0 = 1
    3 <-> 4 = 7
    4 <-> 0 = 4
    
    Minimum Cost to build connected graph:
    13
    
    MST:
    2 <-> 0 = 1
    0 <-> 1 = 2
    4 <-> 0 = 4
    1 <-> 3 = 6
    
    """
    
    # graph[0] : start index
    # graph[1] : end index
    # graph[2] : cost    
    n = 5
    graph = [[0,1,2],[1,2,7],[1,3,6],
             [2,4,5],[2,0,1],[3,4,7],[4,0,4]]
    
    print(prim(n,graph))

start()