// FILE TO HANDLE ROUTES

import express from "express";
import {getAllEmployees, getEmployee, createEmployee, updateEmployees, deleteEmployee} from '../controller/emp.js'

const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)

router.route('/api/employees/:id')
//     .get(getEmployee)
//     .patch(updateEmployees)
    .delete(deleteEmployee)

export default router