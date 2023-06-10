import Employee from "../models/Employee.js"
import { ObjectId } from "mongodb"

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({})
        // count can be used to get the number of results
        res.status(200).json({ employees, count: employees.length })
        // res.send('Get all employees')
        // res.status(200).json({ employees })

    } catch (err) {
        res.status(500).json({msg: err})
    }

    // res.send('Get all employees')
}

const getEmployee = async (req, res) => {
    try {
        // id:employeeId is alias we created because we used /:id in routes and it's very generic so we had error returning the request
   
        // to find by id
        let {id:employeeId} = req.params;
        const employee = await Employee.findOne({ _id: employeeId});

        // to find by other fields
        // let {id:empName} = req.params;
        // const employee = await Employee.findOne({ name: empName});

        // messages to return the request is invalid
        if (!employee) {
            return res.status(404).json({ msg: `No employee with ID: ${employeeId} found`});
        }
        // we must include this line otherwise the browser will wait for the response forever
        res.status(200).json({employee})
    } catch (err) {
        res.status(500).json({msg: err});
    }
    // res.send('Get an employee')
}

const createEmployee = async (req, res) => {
    // create function does all the work; it says as long the data has everything that required i'm going
    // to insert the data in the monogdb collection
    try {
        
        const employee = await Employee.create(req.body)
        // res.status(201).json({msg: 'Employee added successfully'})
        res.status(201).json({ employee })
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
    
    // res.send('Create a new employee')
}

const updateEmployees = (req, res) => {
    res.send('Update an employee')
}

const deleteEmployee = async (req, res) => {
    // res.send('Delete an employee')
    try {
        let {id:employeeId} = req.params;
        const employee = await Employee.deleteOne({_id:employeeId})
        if (!employee) {
            return res.status(404).json({ msg: `No employee with ID: ${employeeId} found`});
        }
        // we must include this line otherwise the browser will wait for the response forever
        res.status(200).json({employee})
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

export {
    getAllEmployees,
    getEmployee, 
    createEmployee,
    updateEmployees, 
    deleteEmployee
    }