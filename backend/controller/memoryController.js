const Memory = require("../schema/PostMessage");

exports.getAllMemories = async(req,res)=>{
    try{
        const memories = await Memory.find();
        res.status(200).json({
            success:true,
            lenght:memories.length,
            memories:memories
        })
    }catch(err){
        res.status(400).json({success:false,"error":err})
    }
}

exports.createMemory = async(req,res)=>{
    try{
        const saveMemory = await Memory.create(req.body)
        res.status(200).json({
            success:true,
            memory:saveMemory
        })
    }catch(err){
        res.status(400).json({success:false,"error":err})
    }
}

exports.getMemory = async(req,res)=>{
    try{
        const memory = await Memory.findById(req.params.id)
        res.status(200).json({
            success:true,
            memory:memory
        })
    }catch(err){
        res.status(400).json({
            success:false,
            "error":err
        })
    }
}

exports.updateContact = async(req,res)=>{
    try {
        const updateContact = await Memory.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success:true,
            memory:updateContact
        })
    } catch (err) {
        res.status(400).json({
            success:false,
            "error":err
        })
    }
}

exports.deleteContact = async(req,res)=>{
    try{
        await Memory.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"Memory Successfully Deleted!!"
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
}