# Team Profile Generator

Passes four unit tests for Employee, Engineer, Intern, and Manager. 

Technology used: inquirer, node, File System.

Start applicaiton with the following command: node index.js

Application has four classes: Employee, Engineer, Intern, and Manager. 

    - Employee Parent Class has the following properties and methods:
        
        - name

        - id

        - email

        - getName()

        - getId()

        - getEmail()

        - getRole() // Returns 'Employee'
    
    - Manager Class extends Employee Class with the following properties and methods:
        
        - officeNumber

        - getRole() // Overridden to return 'Manager'

    - Engineer Class extends Employee Class with the following properties and methods:
        
        - github // GitHub username

        - getGithub()

        - getRole() // Overridden to return 'Engineer'

    - Intern Class extends Employee Class with the following properties and methods:

        - school

        - getSchool()

        - getRole() // Overridden to return 'Intern'


Video Walkthrough found here

https://drive.google.com/file/d/1fQZlovCMtjwlFjTNMokV6JTwFhEnHR9p/view
https://drive.google.com/file/d/1fQZlovCMtjwlFjTNMokV6JTwFhEnHR9p/view