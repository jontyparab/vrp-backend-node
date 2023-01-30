// Importing our data access layer
import * as problemInfoModel from '../../models/problemInfo.model.js'

export const problemResolver =  {
  Query: {
    problemInfos: () => {
      return problemInfoModel.getAllProblemInfos()
    },
    problemInfo: (_, args) => {
      return problemInfoModel.getProblemInfoById(args.id)
    }
  },
  Mutation: {
    createProblemInfo: (_, args) => {
      return problemInfoModel.createProblemInfo(args.file)
    },
    deleteProblemInfo: (_, args) => {
      return problemInfoModel.deleteProblemInfo(args.id)
    },
    updateProblemInfo: (_, args) => {
      return problemInfoModel.updateProblemInfo(args.id, args.input)
    },
    updateProblemInfoSolution: (_, args) => {
      return problemInfoModel.updateProblemInfoSolution(args.id, args.input)
    }
  }
}
