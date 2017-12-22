//Modules
const fs = require("fs")
const csv = require("csvtojson")
const path = require("path")

const jsonFilePath = "customer-data.txt"

const csvFilePath = "customer-data.csv"
var jObject = []
console.log(typeof(jObject))
csv()
.fromFile(csvFilePath)
.on("json", (jsonObj) => {
    jObject.push(jsonObj)
}).on("done",(error) => {
    if (error) return console.error(error) 
    fs.writeFile(jsonFilePath, JSON.stringify(jObject, null, 2), (error)=>{
        console.log('Convertion Happened successfully')
        process.exit(0)
    })
})







