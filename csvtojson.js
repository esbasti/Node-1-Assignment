//Modules
const fs = require("fs")
const csv = require("csvtojson")
const path = require("path")

const jsonFilePath='customer-data.json'

const csvFilePath = "customer-data.csv"
var jObject = []
console.log(typeof(jObject))
csv()
.fromFile(csvFilePath)
.on("json", (jsonObj) => {
    jObject.push(JSON.stringify(jsonObj))
}).on("done",(error) => {
    console.log(jObject)
    fs.writeFileSync(path.join(__dirname, "convertedToJson.txt"), jObject)
    console.log("End")
    //fs.writeFile(path.join(__dirname, JSON.stringify(jObject, null, 2), 'utf8', function(error){
     //   if (error) return console.error(error) 
    //}))

})



