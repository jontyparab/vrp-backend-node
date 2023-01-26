import mongoose from 'mongoose'

const problemSchema = new mongoose.Schema({
  name: String,
  dimension: Number,
  vehicles: Number,
  optimalValue: Number,
  capacity: Number,
  depotNode: Number,
  nodeData: {
    rowNumber: {
      type: Map,
      of: {
        node: Number,
        latitude: Decimal128,
        longitude: Decimal128,
        demand: Number,
        priority: Number,
      }
    }
  },
  solution: {
    routes: [{tour: [[Number, Number]], tourDistance: Number }],
    totalDistance: Number
  },
  file: {
    type: String,
    required: true
  }
})

// Connects problemSchema with the "problem" collection
export const problem = mongoose.model('Problem', problemSchema);
