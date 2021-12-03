const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercise: [
        {
            name: {
                type: String,
                trim: true,
                required: 'Exercise NAME is required'
            },
            type: {
                type: String,
                trim: true,
                required: 'Exercise TYPE is required'
            },
            distance: {
                type: Number,
            },
            duration: {
                type: Number,
                required: 'Exercise DURATION is required'
            },
            length: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;