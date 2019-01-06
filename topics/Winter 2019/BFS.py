### BFS ###
# Takes in an adjacency list (2D), and a source
# Returns Shortest distance of each node from source (List)
# Distance is calculated with how many edges away a node is 
# from another

def bfs(adjList,source):

    # makes a 'queue' structure, with the source as initial data
    q = [source]

    # keep track distance from source (-1 means unvisited)
    distance = [-1 for _ in range(len(adjList))]

    # distance to the source from the source is 0
    distance[source] = 0

    # keeps repeating until there are no more edges to traverse
    # that is connected to source
    while q!=[]:

         # get next node in line
        front = q.pop(0)                           
        
         # go through all the edges the node has
        for node in adjList[front]:                

            # unvisited nodes
            if distance[node] == -1:                
                q.append(node)
                distance[node] = distance[front]+1  

    return distance



def start():
    """
    Example (Directed, Unweighted Graph):

    Graph:
        0 -> 1,2
        1 -> 3,4
        2 -> 1,4
        3 -> 4
        4 -> 1,2

    Source: all nodes
    
    Results: 
    0: [0, 1, 1, 2, 2]
    1: [-1, 0, 2, 1, 1]
    2: [-1, 1, 0, 2, 1]
    3: [-1, 2, 2, 0, 1]
    4: [-1, 1, 1, 2, 0]
    
    Shows that 0 is unreachable from other nodes.

    """
    
    for i in range(5): 
        print(  str(i) + ": " + 
                str(bfs([[1,2],[3,4],[1,4],[4],[1,2]],i)))
    
start()