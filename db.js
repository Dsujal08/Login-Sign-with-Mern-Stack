const mongooose = require('mongoose')

module.exports =() =>
{
    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    };
     
    try {
        mongooose.connect(process.env.DB, connectionParams)
        console.log("Connected to DB Successfully");
        
    } catch (error) {
        console.log(error);
        console.log("Could Not Connect ");
        
        
    }
}