import { contactModel } from "../models/contact.model.js"

export const getContactController = async (req,res)=>{
    try {
        const contacts = await contactModel.find({})
        res.status(200).json({
            msg : "fetched all contacts",
            contacts : contacts
        })
    } catch (error) {
        console.log('error fetching all the contacts' , error)
        res.status(400).json({
            msg : "error fetching contacts"
        })
    }
}

export const postContactController = async (req,res)=>{
    try {
        const {name , email , phone , message} = req.body

        // check for valid email using regex 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({
                msg : "Invalid email format"
            })
        }
        
        const newContact = new contactModel({
            name,
            email,
            phone,
            message
        })
        await newContact.save()
        res.status(201).json({
            msg : "Contact saved successfully"
        })
    } catch (error) {
        console.log('error saving contact' , error)
        res.status(400).json({
            msg : "error saving contact"
        })
    }
}

export const deleteContactController = async (req,res)=>{
    try {
        const {id} = req.params
        await contactModel.findByIdAndDelete(id)
        res.status(200).json({
            msg : "Contact deleted successfully"
        })
    }
    catch (error) {
        console.log('error deleting contact' , error)
        res.status(400).json({
            msg : "error deleting contact"
        })
    }
}
