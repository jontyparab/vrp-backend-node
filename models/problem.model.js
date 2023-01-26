const problems = [
  {
    id: "1",
    name: 'Test',
    dimension: 30,
    vehicles: 8,
    optimalValue: 6485,
    capacity: 20,
    depotNode: 1,
    nodeData: [
      {
        node: 1,
        latitude: 15,
        longitude: 19,
        demand: 4,
        priority: 0,
      }
    ],
    solution: { 
      routes: [
        {
          tour: [0, 7, 5, 4, 3, 2, 0], 
          tourDistance: 19104 
        },
        {
          tour: [0, 12, 11, 10, 9, 6, 1, 0], 
          tourDistance: 25512 
        },
        {
          tour: [0, 21, 20, 18, 17, 16, 15, 14, 13, 8, 0],
          tourDistance: 6388 
        }
      ],
      totalDistance: 79215
    },
    file: Buffer.from('File buffer placeholder')
  }
]

function getAllProblems() {
  return problems
}

function getProblemById(id) {
  return problems.find(p=>p.id===id)
}

function createProblem() {
  
}

export {
  getAllProblems,
  getProblemById,
  createProblem
}
