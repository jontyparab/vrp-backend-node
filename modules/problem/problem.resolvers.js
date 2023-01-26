import * as problemInfoModel from '../../models/problem.model.js'

export const problemResolver =  {
  Query: {
    problems: () => {
      return problemInfoModel.getAllProblems()
    },
    problem: (_, args) => {
      return problemInfoModel.getProblemById(args.id)
    }
  },
  Mutation: {
    createProblem: (_, args) => {

    },
    // getProblem: (_, args) => {

    // },
    deleteProblem: (_, args) => {

    },
    updateProblemInfo: (_, args) => {

    },
    updateProblemSolution: (_, args) => {

    }
  }
}
