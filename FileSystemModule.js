const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fs = require('fs');

var filename = "";
var directory = "";
var content = "";


var createDirectoryWizard = () => {
    rl.question("Kindly Enter Directory Name:", (ans) => {
        directory = ans;
        fs.mkdir(ans, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Create a Directory:" + directory);
            }
            repeat();
        });
    });
};

var removeDirectoryWizard = () => {
    rl.question("Enter directory name which you wish to delete:", (ans) => {
        directory = ans;
        fs.rmdir(ans, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Delete Directory:" + directory);
            }
            repeat();
        });
    });
};

var createFileWizard = () => {
    rl.question("Enter File name:", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter File Content:", (ans) => {
            content = ans;
            fs.writeFile(filename, content, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File Created SuccessFully..!")
                }
                repeat();
            });
        });
    });
};
var readFileWizard = () => {
    rl.question("Enter File Name which you wish to read:", (ans) => {
        filename = ans + ".txt";
        fs.readFile(filename, 'utf8', (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
            repeat();
        });
    });
};
var deleteFileWizard = () => {
    rl.question("Enter File Name  which you wish to Delete:", (ans) => {
        filename = ans + ".txt";
        fs.unlink(filename, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Deleted File:" + filename);
            }
            repeat();
        });
    });
};
var appendFileWizard = () => {
    rl.question("Enter File name  which you wish to append:", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter content:", (ans) => {
            content = ans;
            fs.appendFile(filename, content, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Append File Content:" + filename);
                }
                repeat();
            });
        });
    });
};
var updateFileWizard = () => {
    rl.question("Enter File Name which you wish to update in all files:", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter content:", (ans) => {
            content = ans;
            fs.writeFile(filename, content, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Update file Data:" + filename);
                }
                repeat();
            });
        });
    });
};
var renameFileWizard = () => {
    rl.question("Enter File name Which you want to rename:", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter New Name Of File:", (ans) => {
            var newfilename = ans + ".txt";
            fs.rename(filename, newfilename, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("New file name Is:" + newfilename);
                }
                repeat();
            });
        });
    });
};

console.log("Welcome to the File System..!");

var instruction = () => {
    console.log("1: Create Directory");
    console.log("2: Remove Directory");
    console.log("3: Create File and Write");
    console.log("4: Read File");
    console.log("5: Delete File");
    console.log("6: Append Data To File");
    console.log("7: Update File with New Data");
    console.log("8: Rename File");
    console.log("0: Exit");
};

var start = () => {
    rl.question("Enter Your Choice:", (ans) => {
        if (ans == '1') {
            createDirectoryWizard();
        } else if (ans == '2') {
            removeDirectoryWizard();
        } else if (ans == '3') {
            createFileWizard();
        } else if (ans == '4') {
            readFileWizard();
        } else if (ans == '5') {
            deleteFileWizard();
        } else if (ans == '6') {
            appendFileWizard();
        } else if (ans == '7') {
            updateFileWizard();
        } else if (ans == "8") {
            renameFileWizard();
        } else if (ans == "0") {
            rl.close();
        } else {
            console.log("Invalid Choice, Kindly enter valid choice!");
            start();
        }
    });
};

var repeat = () => {
    instruction();
    start();
};

console.log("Welcome to the File System..!");
repeat();