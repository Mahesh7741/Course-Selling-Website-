const zod=require('zod');

const typeSchema=zod.object({
    username:zod.string(),
    password:zod.string(),
})

module.exports={
    typeSchema
}