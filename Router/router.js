// 1) import express
const express = require('express')

// 2) create an object for the class Router in express
const router = new express.Router()

//import emp schema
const empController = require('../Controller/EmpController')

    // 1) Upload employee
    router.post('/employee/upload',empController.uploadEmployeeController)

    // 2) get employee
    router.get('/employees/get',empController.getAllEmployeeController)

    // 3) update employee
    router.put('/employee/update/:id',empController.editEmployeeController)

    // 4) delete employee
    router.delete('/employee/delete/:id',empController.deleteEmployeeController)


// 4) Export router
module.exports = router