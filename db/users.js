const {v4: uuid} = require('uuid')

const users = {
    data:[
        {
            id:uuid(),
            email:"p@gmail.com",
            password:"12345",
            number:"9876543210",
            name:"maniteja"

        },
        {
            id:uuid(),
            email:"k@gmail.com",
            password:"54321",
            number:"8745961230",
            name:"komali"

        },
        {
            id:uuid(),
            email:"v@gmail.com",
            password:"98765",
            number:"7458961230",
            name:"vinisha"

        },

    ]
}

module.exports=users