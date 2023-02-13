

const middleware = (req,res,next)=>{
    //console.log("Middleware invoked")
    next()
}

export default middleware