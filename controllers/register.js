

const models = require('../models')
const User = models.user

exports.register = (req, res)=>{    

    const fullname = req.body.fullname
    const email = req.body.email
    const password = req.body.password 
    
        User.findOne({where: {email}}).then(user=>{
            if(user){
                res.send({
                    error :true,
                    massage : "error bray email sudah terdaftar"
                }) 
            }else{
                User.create( {fullname, email, password} ).then(article=>res.send(article))
            }
        }
    )
/*
    project.save().then(() => {
        // my nice callback stuff
    })
      
    task.save().catch(error => {
        error : true
        massage
    })
*/
    
}