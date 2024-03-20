require('dotenv').config();
const express = require('express');
const{getDb, connectToDb} = require('./mongoDB');
const {ObjectId} =require('mongodb');
const cors = require('cors')

const app = express();
const auth=require('./routes/user')
const article=require('./routes/article')
app.use(express.json())
app.use(cors())


let db;

connectToDb((err) => {
    if(!err) 
    {
        app.listen(3000, () => {
            console.log('app listening on port 3000');
        })
        db=getDb()
    }
});

// app.get('/article', (req,res) => {
//     let article=[]
//     db.collection('article').find().forEach((item)=> (article.push(item))  
//     ).then(()=> {
//         res.status(200).json(article)
//     }).catch(()=>{
//         res.status(500).json({error: 'Could not fetch the documents'})
//     })
// })

// app.post('/article', (req,res) => {
//     let article = req.body
//     db.collection('article').insertOne(article).then(() => {
//         res.status(200).json({"Done":"article added"});
//     }).catch(()=> {
//         res.status(500).json({error: 'Could not add the article'})
//     })    
// })

// app.delete('/article', (req,res) => {
//     db.collection('article').deleteOne({_id: new ObjectId(req.query.id)}).then(()=> {
//         res.status(200).json({"file" : "deleted"})
//     }).catch(()=> {
//         res.status(500).json({error: 'Could not delete the article'})})
// })

// app.patch('/article', (req,res) => {
//     let update=req.body
//     db.collection('article').updateOne({ _id: new ObjectId(req.query.id)}, {$set: update}).then(()=> {
//         res.status(200).json({"file" : "updated"})
//     }).catch(()=> {
//         res.status(500).json({error: 'Could not update the article'})})
// })

app.use('/auth',auth)

app.use('/article',article)