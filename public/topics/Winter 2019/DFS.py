### DFS ###
# Takes in an adjacency list (2D), a source, a 'visited' list, and the current path
# Returns a cycle if there is a cycle from origin (2D List), else None
# RECURSIVE function
def dfs(adjList, source, visited, path):
    
    cycle = None
    
    for node in adjList[source]:
        
        path.append(node) 
        
        # if equal to origin, return the cycle
        if node == path[0]: return path     
                            
        # else if the node is unvisited, dfs on it
        elif not visited[node]: 
            
            visited[node] = True
            cycle = dfs(adjList, node, visited, path)
            
            # if there's no cycle, continue searching
            if cycle != None: return cycle      
            
        path.pop()
    
    return cycle


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
    0: None
    1: [1, 3, 4, 1]
    2: [2, 1, 3, 4, 2]
    3: [3, 4, 1, 3]
    4: [4, 1, 3, 4]
    
    Shows that there's no cycle starting/ending at 0,
    while others do.

    """
    
    for i in range(5): 
        print(str(i) + ": " + str(dfs( [[1,2],[3,4],[1,4],[4],[1,2]], i, [False for _ in range(5)], [i])) )
    
start()