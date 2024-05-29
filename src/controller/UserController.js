const {UserOTPService, VerifyOTPService, SaveProfileService, ReadProfileService} = require("../services/UserServices");

exports.UserOTP=async(req,res)=>{
let result= await UserOTPService(req)
    return res.status(200).send(result)
}

exports.VerifyLogin=async(req,res)=>{
    let result= await VerifyOTPService(req)
    if(result['status']==="success"){
        let cookieOption={
            expires:new Date(Date.now()+24*6060*1000), httpOnly:false}
            res.cookie("token",result['token'],cookieOption)

        return res.status(200).send(result)
    }else{
        return res.status(200).send(result)
    }

}

exports.UserLogout=async(req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*60*1000), httpOnly:false}
    res.cookie('token',result['token'],cookieOption)
    return res.status(200).json({status:"success",message:"Logout successfully"})
}

exports.CreateProfile=async(req,res)=>{
    let result=await SaveProfileService(req)
    return res.status(200).json(result)
}

exports.UpdateProfile=async(req,res)=>{
    let result=await SaveProfileService(req)
    return res.status(200).json(result)

}

exports.ReadProfile=async(req,res)=>{
    let result=await ReadProfileService(req)
    return res.status(200).json(result)

}
