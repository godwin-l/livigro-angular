var client = require('../db/elastic');



exports.createPackage = (package)=> {
    
    return new Promise( (resolve,reject)=> {
        client.index({
            index: 'packages',
            type: 'packages',
            id: package.id,
            body: {
            packageName: package.packageName
            }
            },  (err, data)=> {
            if (err) {
            reject(err);
            } else {

            resolve(data);
            }
            });
    });
   }
   

   exports.getPackages = (term)=>{
       console.log(term)
       return new Promise((resolve,reject)=>{
        client.search({
            index: "packages",
            type: 'packages',
            body: {
            "query": {
            "bool": {
                "should": [{

                    "multi_match": {
                    "query": term,
                    "type":       "best_fields",
                    "fields": ["packageName"]
                    }
                    }
                   
                    ]
            }
           
            }
            }
            },(err,data)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(data);
                }
            });
       });
   }