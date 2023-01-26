const problems = [
  {
    id: 1,
    name: 'Test',
    dimension: 30,
    vehicles: 8,
    optimalValue: 6485,
    capacity: 20,
    depotNode: 1,
    nodeData: {
      0: {
        node: 1,
        latitude: 15,
        longitude: 19,
        demand: 4,
        priority: 0,
      }
    },
    solution: { 
      routes: [
        {
          tour: [[15, 19], [71, 41], [69, 65], [71, 61], [79, 47], [87, 25], [91, 21], [93, 7], [93, 91], [69, 1]], 
          tourDistance: 19104 
        },
        {
          tour: [[15, 19], [1, 49], [21, 81], [15, 83], [5, 95], [19, 91], [21, 91], [27, 95], [31, 87], [61, 83], [67, 91]], 
          tourDistance: 25512 
        },
        {
          tour: [[15, 19], [23, 13], [29, 9], [29, 17], [33, 31]],
          tourDistance: 6388 
        },
        {
          tour: [[15, 19], [3, 25], [19, 47], [19, 65], [15, 79], [19, 75], [25, 65], [27, 49]],
          tourDistance: 14743 
        },
        {
          tour: [[15, 19], [55, 47], [57, 63], [59, 51], [65, 43], [41, 23]],
          tourDistance: 13468 
        }
      ],
      totalDistance: 79215
    },
    file: "Buffer.from('File buffer placeholder')"
  }
]

function getAllProblems() {
  return problems
}

function getProblemById(id) {
  
}

function createProblem() {
  
}

export {
  getAllProblems,
  getProblemById,
  createProblem
}
