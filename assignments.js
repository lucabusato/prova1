const express = require('express'),
    bodyParser = require('body-parser');
const assignments = express.Router()

var uuid = require('uuid-v4');

var assignmentsArray = [ {taskID: '1', assignmentID: '1', workerID: '1', assignmentResult: {value: '10'}},
                    {taskID: '2', assignmentID: '2', workerID: '2', assignmentResult: {value: '8'}}]

assignments.route('/')
    .get((req,res) => {
        res.status=200
        res.json(assignmentsArray)
    })
    .post((req,res) => {
        /*var assignment = req.body.assignment
        assignmentsArray.push(assignment)*/
        var assignment = {}
        assignment.taskID = uuid()
        assignment.assignmentID = req.body.assignmentID
        assignment.workerID = req.body.workerID
        assignment.assignmentResult = req.body.assignmentResult
        
        assignmentsArray.push(assignment)
    
        res.status=200
        res.json(assignment)
    })

assignments.route('/:assignmentID')
    .get((req,res) => {
        var assignmentID = req.params.assignmentID
        var i = assignmentsArray.findIndex(item => {return item.assignmentID === assignmentID})
        if (i==-1) res.sendStatus(404)
        else{
            var assignment = assignmentsArray[i]
            res.status=200
            res.json(assignment)
        }
    })
    .put((req,res) => {
        var assignmentID = req.params.assignmentID
        var i = assignmentsArray.findIndex(item => {return item.assignmentID === assignmentID})
        if (i==-1) res.sendStatus(404)
        else{
            if (req.body.workerID) assignmentsArray[i].workerID = req.body.workerID
            if (req.body.assignmentResult) assignmentsArray[i].assignmentResult = req.body.assignmentResult
            var assignment = assignmentsArray[i]
            res.status=200
            res.json(assignment)
        } 
    })
    .delete((req,res) => {
        var assignmentID = req.params.assignmentID
        var i = assignmentsArray.findIndex(item => {return item.assignmentID === assignmentID})
        if (i==-1) res.sendStatus(404)
        else{
            var deleted = assignmentsArray[i]
            assignmentsArray.splice(i,1)
            res.status=200
            res.json(deleted)
        }
    })

module.exports = assignments