$( document ).ready(function() {
    $.ajax({
        type: "GET",
        url: 'https://rickandmortyapi.com/api/character/',
        dataType: "JSON",
        success: response => {
            console.log(response);
            console.log(response.results);
            let characters = response.results;
            const area = document.getElementById('cards-rick');
            let insert = "";

            characters.forEach(element => {
                insert += `<div class="mx-auto col-lg-6 col-md-6 col-12 col-xl-4">
                    <div class="card mb-3 border-0">
                        <div class="row no-gutters shadow-lg">
                            <div class="col-md-5">
                                <img class="w-100 rounded-left" src="${element.image}" class="card-img" height="100%">
                            </div>
                            <div class="col-md-7 bg-dark">
                                <div class="ml-3 mt-lg-3 mt-md-3 mt-3">
                                    <h5 class="font-weight-bold text-info rm-mb-name rm-type-text">${element.name}</h5>
                                    <div class="form-row mx-auto">`;

                switch (element.status) {
                    case 'unknown': 
                        insert += `<div class="mt-2 status-unknown"></div>`;
                    break;
                    case 'Alive':
                        insert += `<div class="mt-2 status-alive"></div>`;
                    break;
                    case 'Dead': 
                        insert += `<div class="mt-2 status-dead"></div>`;
                    break;
                    default:
                        break;
                }
                                   
                insert +=  `<p class=" text-light">${element.status} - ${element.species}</p>
                            </div>
                                    <div class="text-light">
                                        <span class="text-muted" style="font-size: 12px;">Ultima ubicación conocida</span>
                                        <br>
                                        <span>${element.location.name}</span>
                                    </div>
                                    <div class="text-light">
                                        <span class="text-muted" style="font-size: 12px;">Origen</span><strong style="font-size: 12px;"> ${element.origin.name}</strong>
                                        <br>
                                        <span></span>
                                    </div>
                                    <div class="col-12 mt-xl-2 mt-lg-4 mt-md-4 mt-2">
                                    <a class="btn rounded float-right text-color-button mb-2" href="character.php?id=${element.id}">Ver más</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>`;
            });
            area.innerHTML = insert;
        }
    });

    $('#search').on('click', function (e) {
        e.preventDefault();
        searchCharacter($('#name').val());
    });
});

function searchCharacter(name) {
    $.ajax({
        type: "GET",
        url: `https://rickandmortyapi.com/api/character/?name=${name}`,
        dataType: "JSON",
        success: response => {
            console.log(response.results);
            let characters = response.results;
            const area = document.getElementById('cards-rick');
            let insert = "";
            area.innerHTML = "";
            characters.forEach(element => {
                insert += `<div class="mx-auto col-lg-6 col-md-6 col-12 col-xl-4">
                    <div class="card mb-3 border-0">
                        <div class="row no-gutters shadow-lg">
                            <div class="col-md-5">
                                <img class="w-100 rounded-left" src="${element.image}" class="card-img" height="100%">
                            </div>
                            <div class="col-md-7 bg-dark">
                                <div class="ml-3 mt-lg-3 mt-md-3 mt-3">
                                    <h5 class="font-weight-bold text-info rm-mb-name rm-type-text">${element.name}</h5>
                                    <div class="form-row mx-auto">`;

                switch (element.status) {
                    case 'unknown': 
                        insert += `<div class="mt-2 status-unknown"></div>`;
                    break;
                    case 'Alive':
                        insert += `<div class="mt-2 status-alive"></div>`;
                    break;
                    case 'Dead': 
                        insert += `<div class="mt-2 status-dead"></div>`;
                    break;
                    default:
                        break;
                }
                                   
                insert +=  `<p class=" text-light">${element.status} - ${element.species}</p>
                            </div>
                                    <div class="text-light">
                                        <span class="text-muted" style="font-size: 12px;">Ultima ubicación conocida</span>
                                        <br>
                                        <span>${element.location.name}</span>
                                    </div>
                                    <div class="text-light">
                                        <span class="text-muted" style="font-size: 12px;">Origen</span><strong style="font-size: 12px;"> ${element.origin.name}</strong>
                                        <br>
                                        <span></span>
                                    </div>
                                    <div class="col-12 mt-xl-2 mt-lg-4 mt-md-4 mt-2">
                                    <a class="btn rounded float-right text-color-button mb-2" href="character.php?id=${element.id}">Ver más</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>`;
            });
            area.innerHTML = insert;
        }, error: err => {
            console.log(err.status);
            if (err.status == 404 ){
                const area = document.getElementById('alerta');
                var insert = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Hola!</strong> No hay coincidencias con la busqueda realizada
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
                area.innerHTML = '';
                area.innerHTML = insert;
            }
        }
    });
}