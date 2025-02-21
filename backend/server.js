const express = require('express');
const cors = require('cors');
const app = express();

const Port = 8000;
app.use(cors());
const data= [
    { id: 1, name: 'Sudipta ', loc: 'Kolkata', dept: 'IT', gen: 'Female', design: 'Junior developer' },
    { id: 2, name: 'Shanku Paul', loc: 'pune', dept: 'IT', gen: 'male', design: 'Senior developer' },
    { id: 3, name: 'Ashish Sen', loc: 'Chennai', dept: 'HR', gen: 'Male', design: 'HR' },
    { id: 4, name: 'sourav palodhi', loc: 'Delhi', dept: 'Marketing', gen: 'Male', design: 'Project coordinator' },
    { id: 5, name: 'sourav sen', loc: 'Kolkata', dept: 'IT', gen: 'Male', design: 'Junior developer' },
]
app.get('/api',(req,res)=>{
    res.json(data)
})
app.listen(Port,()=>{
    console.log("server is running");
})
