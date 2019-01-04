###   UVA #824 : Coast Tracker
###   Labels   : implementation

robot = [int(x) for x in input().split()]
while robot!=[-1]:
    
    # building graph as 2D-like
    graph = [ 0,0,0,
              0,2,0,
              0,0,0 ]
    for _ in range(8):
        data = [int(x) for x in input().split()]
        graph[ 3*(robot[1]-data[1]+1) + (robot[0]-data[0]+1) ] = data[2]
    
    # rearranging graph to 1D, with 0 = east
    graph.append(graph.pop(7))
    graph.append(graph.pop(6))    
    graph.pop(4)
    graph = [graph.pop(3)] + graph
    
    # check for land in counter-clockwise direction
    # starting from right of robot's direction
    
    for i in range(robot[2],8):
        if graph[i]: print((i-2+8)%8);break;
    else:
        for i in range(0,robot[2]):
            if graph[i]: print((i-2+8)%8);break;        
    robot = [int(x) for x in input().split()]