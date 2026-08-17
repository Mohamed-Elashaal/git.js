const path=require("node:path");
const fs=require("node:fs")
const EventEmitter=require("node:events");
const myEmitter=new EventEmitter
const os=require("node:os");
const zlib = require("node:zlib");
const { pipeline } = require("node:stream/promises");

//q1
function getfile(){
    let filepath=path.resolve(__filename);
    let dirpath=path.dirname(filepath);
    let output={
        file:filepath,
        dir:dirpath
    };
console.log(output);

}
getfile()

//q2 

function filename(filepath){
    return path.basename(filepath)
    
    
}
let input="/user/files/report.pdf";
console.log(filename(input));

//q3

function pathname(inputobject){
    return path.format(inputobject)
} 
let inputobject={ dir:"/folder",
     name:"app",
      ext:".js"};

      console.log(pathname(inputobject));

//q4
function fileextension(InputExample){
    return path.extname(InputExample)
}
let InputExample=" /docs/readme.md";
console.log(fileextension(InputExample));
//q5
function parsename(inputpath){
    let parses=path.parse(inputpath);
    return {name:parses.name,ext:parses.ext};

}
let inputpath="/home/app/main.js"
console.log(parsename(inputpath));
//q6
function isabsolute(filepath){
    return path.isAbsolute(filepath);
}
console.log(isabsolute("/home/user/file.txt"));
console.log(isabsolute("./file.txt"));


//q7
function joinsegment(arr){
return path.join(...arr)
}
var arr=["src", "components", "App.js"];

console.log(joinsegment(arr));


//q8
function resolvetoabsolute(relativepath){
    return path.resolve(relativepath)
}
console.log(resolvetoabsolute("./index.js"));
//q9
function joinpath(...path){
    return path.join(...path);
}
console.log(joinpath("/folder1", "folder2/file.txt"));

//q10
async function deleteFileAsync(filepath) {
    try {
        await fs.unlink(filepath);
        console.log(`the ${fileName}is deleted`);
    } catch (error) {
        console.error("error");    
    }  
}

//Q11

function creatfolder(folderpath){
    try { fs.mkdirSync(folderpath,{recursive:true})
    return "success"
        
    } catch (error) {
        return `error:${error.message}`;  
    }

}
console.log(creatfolder("./myfolder"));


//Q12
myEmitter.on("start",()=>{
    console.log("wellcome in event triggered");
});
myEmitter.emit("start")

//q13
myEmitter.on("login",(username)=>{
    console.log(`user login in :${username}`);

});
myEmitter.emit("login","ahmed")

//q14
function readFileSyncanlog(filepath2){
    try {
        const data=fs.readFileSync(filepath2,{encoding:"utf-8"})
        console.log(data);
        
        
    } catch (error) {
        console.error(`ereor is : ${error.message}`)
        
    }
}
readFileSyncanlog("G:\\JS\\test.txt")


//q15

async function writedata(filepath3,content) {
    try {
         fs.writeFileSync(filepath3,content,{encoding:"utf-8"})
        console.log("file written success");
        
    } catch (error) {

         console.error(`ereor is : ${error.message}`)
    }
    
}
writedata("G:\\JS\\asyn.txt","Async save")


//q16

function cheakfileexist(path){
    return fs.existsSync(path)
}
console.log(cheakfileexist("G:\\JS\\test.txt"));
console.log(cheakfileexist("G:\\JS\\test2.txt"));

//q17
function platform(){
    return {Platform: os.platform(),
               Arch: os.arch()}
} 

//Q18

console.log(platform());
function readstreamchunks(filepath4){
    const readstream=fs.createReadStream(filepath4,"utf-8")
    readstream.on("data",(chunk)=>{
        console.log("--- New Chunk Received ---");
    console.log(chunk);
    console.log("__________________________________");
    });
    readstream.on("end",()=>{
        console.log("Finished reading file chunks.");
    });
    readstream.on("error",(err)=>{
       console.error(`Error reading stream: ${err.message}`); 
    });

}
readstreamchunks("./test2.txt")
readstreamchunks("./test.txt")

//q19
function copyFileUsingStreams(sourcePath, destPath) {

  const readStream = fs.createReadStream(sourcePath);
  const writeStream = fs.createWriteStream(destPath);

  readStream.pipe(writeStream);
  writeStream.on("finish", () => {
    console.log("File copied using streams");
  });

 
  readStream.on("error", (err) => console.error(`Read error: ${err.message}`));
  writeStream.on("error", (err) => console.error(`Write error: ${err.message}`));
}
copyFileUsingStreams("G:\\JS\\tEst.txt","\.smalldata.txt")

//Q20
async function compressFile(inputPath, outputPath) {
  try {
    const sourceStream = fs.createReadStream(inputPath);
    const gzipTransform = zlib.createGzip();
    const destinationStream = fs.createWriteStream(outputPath);

    // ربط خط الأنابيب: قراءة -> ضغط -> كتابة
    await pipeline(sourceStream, gzipTransform, destinationStream);
    console.log("File successfully compressed!");
  } catch (error) {
    console.error(`Pipeline failed: ${error.message}`);
  }
}
    
compressFile("G:\\JS\\test.txt","G:\\JS\\test.txt.gz")










