const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML')


const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const pageArray = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter manager's office number.")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        pageArray.push(manager); 
        console.log(manager); 
        addEmployee();
    })
    
};


const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
    ])
    .then(employeeChoice => {

        if(employeeChoice.role === 'Intern'){
          internInput()
        } else {
            engineerInput()
        }
    })

};

const internInput = () => {

    return inquirer.prompt ([
         {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        
           
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Do you want to add team members?',
            default: false
        }
    ])
    .then(internInput => {
        console.log(internInput)
        const  {name, id, email, school, confirmAddEmployee} = internInput; 
        const intern = new Intern (name, id, email, school);

        pageArray.push(intern); 
        if(confirmAddEmployee){
            addEmployee();
        } else {
            console.log(pageArray)
            console.log(pageArray)
            const html = generateHTML(pageArray) 
            writeFile(html)
        }
        
    })
}

addManager()


const writeFile = html => {
    fs.writeFile('./dist/index.html', html, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Profile has been created successfully! Check inside the 'dist' folder for index.html")
        }
    })
}; 