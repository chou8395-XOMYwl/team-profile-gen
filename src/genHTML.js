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