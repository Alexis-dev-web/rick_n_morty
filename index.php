<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('template/header.php') ?>
</head>
<body>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" >
        <a class="navbar-brand" href="#"><img src="assets/imagenes/logo.png" width="70px"></a>
        <div class="" id="navBar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <form class="form-inline my-3 my-lg-0 col-12">
                        <input id="name" class="form-control mr-sm-3 col-7" type="search" placeholder="Buscar..." aria-label="Buscar">
                        <button id="search" class="btn btn-outline-info my-2 my-sm-0 ml-2 col-3" type="submit">Buscar</button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
    <div class="col-10 mx-auto" id="alerta"></div>
    <section class="container-fluid">
        <h3 class="font-weight-bold text-success text-center mt-3"><strong>Personajes de Rick y Morty</strong></h3>
        <div class="row mx-auto mt-4" id="cards-rick">
            
        </div>
    </section>
</body>
    <?php include('template/footer.php') ?>
    <script src="assets/js/main.js"></script>
</html>