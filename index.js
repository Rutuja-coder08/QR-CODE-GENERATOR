import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';
inquirer
  .prompt([{
    message:"type in Your URL.",
    name:"URL",
  }])
  .then((answers) => {
   const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile("URL.txt",url, (err)=>{
        if(err) throw err;
        console.log("The file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });