import ProblemInfo from './problemInfo.mongo.js'

// const ProblemInfo = [
//   {
//     id: "1",
//     name: 'Test',
//     dimension: 30,
//     vehicles: 8,
//     optimalValue: 6485,
//     capacity: 20,
//     depotNode: 1,
//     nodeData: [
//       {
//         node: 1,
//         latitude: 15,
//         longitude: 19,
//         demand: 4,
//         priority: 0,
//       }
//     ],
//     solution: { 
//       routes: [
//         {
//           tour: [0, 7, 5, 4, 3, 2, 0], 
//           tourDistance: 19104 
//         },
//         {
//           tour: [0, 12, 11, 10, 9, 6, 1, 0], 
//           tourDistance: 25512 
//         },
//         {
//           tour: [0, 21, 20, 18, 17, 16, 15, 14, 13, 8, 0],
//           tourDistance: 6388 
//         }
//       ],
//       totalDistance: 79215
//     },
//     file: [26, 35, 42, 66]
//   }
// ]

// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function sleep(fn, ...args) {
//   await timeout(3000);
//   return fn instanceof Function ? fn(...args): fn;
// }

function getAllProblemInfos() {
  return ProblemInfo.find()
}

function getProblemInfoById(id) {
  return ProblemInfo.findById(id)
}

function createProblemInfo(file) {
  return ProblemInfo.create({file})
}

async function deleteProblemInfo(id) {
  return ProblemInfo.deleteOne({_id: id})
}

function updateProblemInfo(id, info) {
  return ProblemInfo.updateOne({_id: id}, info)
}

function updateProblemInfoSolution(id, route) {
  return ProblemInfo.updateOne({_id: id}, {
    $push: {
      "solution.routes": route
    }
  })
}

export {
  getAllProblemInfos,
  getProblemInfoById,
  createProblemInfo,
  deleteProblemInfo,
  updateProblemInfo,
  updateProblemInfoSolution,
}
