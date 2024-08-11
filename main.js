//apple samsung xiaomi huawei
const express = require('express');

const app = express()


app.get('/api/category',(req,res)=>{
    res.json({
      message:'Categoryes of phones',
      data:[
       { id:1,name:'Apple'},
       { id:2,name:'Samsung'},
       { id:3,name:'Xiaomi'},
       { id:4,name:'Huawei'},
      ]
    })
})
app.get('/api/category/:req',(req,res)=>{
  if(req.params=='Apple'){
    res.json({
      data:[
        { id:1,model:'5'},
        { id:1,model:'6'},
        { id:1,model:'7'},
        { id:1,model:'8'},
        { id:1,model:'9'},
        { id:1,model:'10'},
        { id:1,model:'11'},
        { id:1,model:'12'},
        { id:1,model:'13'},
        { id:1,model:'14'},
        { id:1,model:'15'},
      ]
    })
  }
  else if(req.params=='Samsung'){
    res.json({
      data:[
        { id:1,model:'S23'},
        { id:1,model:'S23 Ultra'},
        { id:1,model:'S23+'},
        { id:1,model:'Z Fold 5'},
        { id:1,model:'Z Flip 5'},
        { id:1,model:'A54'},
        { id:1,model:'A34'},
      ]
    })
  }
  else if(req.params=='Xiaomi'){
    res.json({
      data:[
        { id:1,model:'13 Ultra'},
        { id:1,model:'13 Pro'},
        { id:1,model:'13'},
        { id:1,model:'12T Pro'},
        { id:1,model:'Redmi Note 12 Pro'},
        { id:1,model:'Poco F5'},
        { id:1,model:'Poco X4'},
      ]
    })
  }
  else if(req.params=='Xiaomi'){
    res.json({
      data:[
        { id:1,model:'Mate 60 Pro'},
        { id:1,model:'P60 Pro'},
        { id:1,model:'Mate X3'},
        { id:1,model:'P60'},
        { id:1,model:'Nova 11 Pro'},
        { id:1,model:'Nova 11'},
        { id:1,model:'Mate 50 Pro'},
      ]
    })
  }
})
app.listen(5000,()=>{
  console.log('Server started in port 5000');
})