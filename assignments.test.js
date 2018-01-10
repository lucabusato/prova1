const root = process.env.SERVER_URL || 'http://127.0.0.1:5000'
const fetch = require("node-fetch")
const assignmentsRoot = root+'/assignments'
const exampleAssignment =  {taskID: '3', assignmentID: '3', workerID: '3', assignmentResult: {value: '30'}}

const postAssignments = function (newAssignment) {
    return fetch(assignmentsRoot, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newAssignment)
    })
}

const putAssignments = function (assignment) {
    return fetch(assignmentsRoot+'/assignmentID', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(assignment)
    })
}

const deleteAssignments = function (assignmentID) {
    return fetch(assignmentsRoot+'/'+assignmentID, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }//,
    })
}


const getManyAssignments = function () {
    return fetch(assignmentsRoot, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
}

const getOneAssignment = function (assignmentID) {
    return fetch(assignmentsRoot+'/'+assignmentID, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
}