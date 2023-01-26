import * as problemInfoModel from '../../models/problem.model.js'

export const problemResolver =  {
  Query: {
    problems: () => {
      return problemInfoModel.getAllProblems()
    },
    problem: () => {
      return problemInfoModel.getProblemById()
    }
  },
  Mutation: {
    createProblem: (id, file) => {

    },
    getProblem: (id) => {

    },
    deleteProblem: (id) => {

    },
    updateProblemInfo: (id) => {

    },
    updateProblemSolution: (id) => {

    }
  }
}
