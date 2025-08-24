import Student from "../schema/student.js"


//add new student
export const addStudent= async(req,res)=>{
    const {student} = req.body

    if(!student){
        return res.status(400).json({'success':false,'message':'Stduent details required'})
    }
    try {
        const data = await Student.create(student)
        return res.status(200).json({'success':true,'data':data})
    } catch (error) {
        return res.status(500).json({'success':false,'message':error.message})
    }
}

//update student
export const updateStudent=async(req,res)=>{
    const {student} = req.body
    const {id} = req.params

    if(!student){
        return res.status(400).json({'success':false,'message':'Stduent details required'})
    }
    try {
        const data = await Student.findByIdAndUpdate(id,student,{new:true})
        if(!data){
            return res.status(404).json({'success':false,'message':'Stduent not found'})
        }
        return res.status(200).json({'success':true,'data':data})
    } catch (error) {
        return res.status(500).json({'success':false,'message':error.message})
    }
}

//delete student
export const deleteStudent= async(req,res)=>{
    const {id} = req.params
    try {
        const stduent = await Student.findByIdAndDelete(id)
        if(!stduent){
            return res.status(404).json({'success':false,'message':'Stduent not found'})
        }
        return res.status(200).json({'success':true,'message':'deleted sucessfully'})
    } catch (error) {
        return res.status(500).json({'success':false,'message':error.message})
    }
}

//get student by id
export const getStudent= async(req,res)=>{
    const {id} = req.params
    try {
        const stduent = await Student.findById(id)
        if(!stduent){
            return res.status(404).json({'success':false,'message':'Stduent not found'})
        }
        return res.status(200).json({'success':true,'data':stduent})
    } catch (error) {
        return res.status(500).json({'success':false,'message':error.message})
    }
}


//get all stduents
export const getAllStudent= async(req,res)=>{
    try {
        const stduent = await Student.find()
        return res.status(200).json({'success':true,'data':stduent})
    } catch (error) {
        return res.status(500).json({'success':false,'message':error.message})
    }
}