const employees = require('../Modal/EmpSchema')

//logic to upload movie
exports.uploadEmployeeController = async(req,res)=>{
    console.log('inside employee controller logic');
    const {empID,empName,empEmail,empDesig,empAddress} = req.body

    try {
        const existingEmployee = await employees.findOne({empEmail})
        if(existingEmployee){
            res.status(406).json(`${empEmail} already exist...`)
        }
        else{
            const newEmployee = new employees({
                empID,
                empName,
                empEmail,
                empDesig,
                empAddress
            })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }


}

//logic to get emp detials
exports.getAllEmployeeController = async(req,res)=>{
    try {
        const allEmployees = await employees.find()
        res.status(200).json(allEmployees)

    } catch(err){
        res.status(401).json(`Request Failed due to ${err}`)
    }
}

//logic for update employee detials
exports.editEmployeeController = async(req,res)=>{
    const {id} = req.params
    const {empID,empName,empEmail,empDesig,empAddress} = req.body

    try {
        const updateEmployee = await employees.findByIdAndUpdate({_id:id},{empID,empName,empEmail,empDesig,empAddress},{new:true})

        await updateEmployee.save()
        res.status(200).json(updateEmployee)

    } catch (err) {
        res.status(401).json(err)
    }
}

//delete employee
exports.deleteEmployeeController = async(req,res)=>{
    const {id} = req.params

    try {
        const removeEmployee = await employees.findByIdAndDelete({_id:id})
        res.status(200).json(removeEmployee)
    } catch (err) {
        res.status(401).json(err)
    }
}