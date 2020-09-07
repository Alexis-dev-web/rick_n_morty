$(document).ready(function (){
    let params = new URLSearchParams(location.search);
    var id = params.get('id');
    $.ajax({
        type: "GET",
        url: `https://rickandmortyapi.com/api/character/${id}`,
        dataType: "JSON",
        success: response => {
            console.log(response);
            let character = response;
            const area = document.getElementById('character');
            let insert = "";
            insert += `<div class="col-12 mx-auto text-center mt-2">
                            <h3 class="font-weight-bold text-success text-center my-auto"><strong>About ${character.name}</strong></h3>
                        </div>
                        <div class="col-12 mx-auto row">
                            <div class="mx-auto col-lg-4 col-md-4 col-12 mt-4 mb-4 rm-character-border text-center">
                                <img class="rounded-circle" src="${character.image}" class="card-img" width="60%">
                            </div>
                            <div class="col-lg-8 col-md-8 col-12 mx-auto mt-4">
                                <div class="form-group">
                                    <span class="text-light text-muted">Specie: </span>
                                    <span class="text-light"><strong>${character.species}</strong></span>
                                </div>
                                <div class="form-group">
                                    <span class="text-light text-muted">Gender: </span>
                                    <span class="text-light"><strong>${character.gender}</strong></span>
                                </div>
                                <div class="form-group">
                                    <span class="text-light text-muted">Origin: </span>
                                    <span class="text-light"><strong>${character.origin.name}</strong></span>
                                </div>
                                <div class="form-group">
                                    <span class="text-light text-muted">Status: </span>
                                    <span class="text-light"><strong>${character.status}</strong></span>
                                </div>
                                <div class="form-group">
                                    <span class="text-light text-muted">Location: </span>
                                    <span class="text-light"><strong>${character.location.name}</strong></span>
                                </div>
                                <div class="form-group">
                                    <span class="text-light text-muted">Number of episodes: </span>
                                    <span class="text-light"><strong>${character.episode.length}</strong></span>
                                </div>
                                <div class="col-12 mx-auto"> 
                                    <a class="btn text-color-button float-right mb-3" href="index.php">Regresar</a>
                                </div>
                            </div>
                        </div> `;
            area.innerHTML = insert;
        }
    });
});