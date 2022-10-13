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
            </div>
        </div>
    </div>
    `
};