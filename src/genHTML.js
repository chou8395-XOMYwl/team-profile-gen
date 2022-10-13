const generateIntern = function (intern) {
    return `
    <div class="col-md-4 mt-5 col-sm-6">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4>${intern.name}</h4>
                <h5>Intern <i class=""fas fa-user-graduate""></i></h5>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li>Employee ID: ${intern.id}</li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>Intern School:  ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const generateManager = function (manager) {
    return `
    <div class="col-md-4 mt-5 col-sm-6">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4>${manager.name}</h4>
                <h5>Manager <i class="fa-solid fa-list-check"></i></h5>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li>Employee ID: ${manager.id}</li>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-md-4 mt-5 col-sm-6">
        <div class="card shadow-lg mb-5 bg-white rounded">
            <div class="card-header bg-primary">
                <h4>${engineer.name}</h4>
                <h5>Engineer <i class="fas fa-glasses"></i></h5>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li>Employee ID: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
};

generateHTML = (data) => {

    teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const role = employee.getRole();
        const employee = data[i];

        
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamArray.push(internCard);
        }

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamArray.push(engineerCard);
        }

    }

    const employeesCard = teamArray.join('')

    const teamProfileGenerator = generateHTMLPage(employeesCard);
    return teamProfileGenerator;

}

const generateHTMLPage = function (employeesCard) {
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Portfolio</title>
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
            </style>
            </head>
            <body>
                <div class="header">
                    <div class="jumbotron bg-warning">
                        <h1 class="display-4 text-white text-center">My Team</h1>
                    </div>
                </div>
                <div class="container-body container-fluid">
                    <div class="row justify-content-center">
                        ${employeesCard} 
                    </div>
                </div>
            <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
            </body>
</html>`

}

module.exports = generateHTML; 
