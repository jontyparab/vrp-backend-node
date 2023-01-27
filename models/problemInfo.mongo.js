import mongoose from 'mongoose'

const problemInfoSchema = new mongoose.Schema({
  name: String,
  dimension: Number,
  vehicles: Number,
  optimalValue: Number,
  capacity: Number,
  depotNode: Number,
  nodeData: [
    {
      node: Number,
      latitude: Number,
      longitude: Number,
      demand: Number,
      priority: Number,
    }
  ],
  solution: {
    routes: [{tour: [Number], tourDistance: Number }],
    totalDistance: Number
  },
  file: {
    type: Buffer,
    required: true
  }
}, { collection: 'problemInfos'})

// Connects problemInfoSchema with the "problemInfos" collection and __typename problemInfo
export default mongoose.model('problemInfo', problemInfoSchema);
