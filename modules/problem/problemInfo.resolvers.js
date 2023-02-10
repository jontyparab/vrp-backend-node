// Importing our data access layer
import * as problemInfoModel from '../../models/problemInfo.model.js'
import { solverAxios } from '../../services/axios.js'

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
    createProblemInfo: async (_, args) => {
      const problemInfo = await problemInfoModel.createProblemInfo(args.file)
      const res = await solverAxios.post('/route', {
        id: problemInfo.id,
        file: problemInfo.file
      })
      return problemInfo
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
