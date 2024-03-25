const mongoose = require('mongoose');

const mongoURI = 'mongodb://rajveerssadhra__m_project:RajveerSingh@ac-ggu1bsi-shard-00-00.hkad7r5.mongodb.net:27017,ac-ggu1bsi-shard-00-01.hkad7r5.mongodb.net:27017,ac-ggu1bsi-shard-00-02.hkad7r5.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-13ne0a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Gofoodproject'
const mongoDB =async() =>{
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
  
        console.log('Connected to MongoDB');
  
        fetchData();
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
    }
};    
async function fetchData() {
    try {
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  
  
    
     
    // await mongoose.connect(mongoURI);
    // console.log('connected!');
    // let fetched_data = mongoose.connection.collection("food_items");
    // try{
    //     let data = await fetched_data.find({}).toArray();
    //     console.log(data);
    // }catch(err){
    //     console.log("err." , err);
    // }
    //-----------------------
   // // try{
    //     await mongoose.connect(mongoURI);
    //     console.log('connected!');
    //     let fetched_data = mongoose.connection.db.collection("food_items");
    //     let data = await fetched_data.find({}).toArray();
    //     console.log(data);
    // }catch(err){
    //     console.log("err." , err);
   // // }-------------------
    //   // await mongoose.connect(mongoURI , {useNewUrlParser : true} , 
    //     if(err) console.log("---" ,err)
    //     else{
    //         console.log("connected");
    //         const fetched_data = await mongoose.connection.db.collection("food_items")
    //         fetched_data.find({}).toArray( function(err , data){
    //             if(err) console.log(err);
    //             else console.log(data);
    //         })
// ---------
    // }
    //
    // ).then (() =>
    //         console.log('Connected '))
    //         const fetched_data = await mongoose.connection.db.collection("food_items")
    //         fetched_data.find({}).toArray( function(err, data){
    //             if(err) console.log(err);
    //             else console.log()
    //         })
    //     .catch ((err) => { console.error("---" , err); 
    //     });

// };

module.exports = mongoDB; 
 