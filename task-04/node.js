const fs=require('fs-extra');

fs.mkdirpSync("folder");
fs.createFileSync("folder/file.txt");
fs.moveSync("folder/file.txt","folder1/file.txt");
fs.copySync("folder1/file.txt","folder2/file.txt");
fs.unlinkSync("folder2/file.txt");
fs.unlinkSync("folder1/file.txt");
fs.rmdirSync("folder");
fs.rmdirSync("folder1"); 
fs.rmdirSync("folder2");   