
//función para ocultar overlay

function off() {
    document.getElementById("contact_form").style.opacity = "0";
    overlay.style.width = "0%";}

//función para inyectar el overlay en cada página

    function cargar_overlay(){
        var overlay = document.getElementById("overlay");
        
        if (overlay.innerHTML == ''){
        overlay.innerHTML += '<div id="contact_form">'+
        '<a href="javascript:void(0)" id="closebtn" class="closebtn" onclick="off()">&times;</a>'+        
        '<h2 class="text-center">Envía tu consulta</h2>'+
        '<h5 class="text-center">Recibirás tu respuesta en la menor brevedad posible</h5>'+
        '<form action="" method="POST" class="form-signin text-center">'+
        '<div class="form-group grid">'+
            '<!--email-->'+
            '<div id="email" class="input-group mb-3">'+
                '<div class="input-group-prepend">'+
                    '<span class="input-group-text"><i class="fas fa-envelope"></i></span>'+
                '</div>'+
                '<input type="email" name="email" id="email" class="form-control" placeholder="E-mail" required>'+
            '</div>'+
            '<!--Contact Number-->'+
            '<div id="phone" class="input-group mb-3">'+
                '<div class="input-group-prepend">'+
                    '<span class="input-group-text"><i class="fas fa-phone"></i></span>'+
                '</div>'+
                '<input type="tel" name="phone" id="phone" class="form-control" placeholder="Teléfono" required>'+
            '</div>'+
            '<!--Name-->'+
            '<div id="name" class="input-group mb-3">'+
                '<div class="input-group-prepend">'+
                    '<span class="input-group-text"><i class="fas fa-user"></i></span>'+
                '</div>'+
                '<input type="text" name="firstname" id="firstname" class="form-control" placeholder="Nombre" required>'+
            '</div>'+
            '<!--Surname-->'+
            '<div id="surname" class="input-group mb-3">'+
                '<div class="input-group-prepend">'+
                    '<span class="input-group-text"><i class="fas fa-user"></i></span>'+
                '</div>'+
                '<input type="text" name="lastname" id="lastname" class="form-control" placeholder="Apellido" required>'+
            '</div>'+
            '<div id="textarea" class="input-group mb-3">'+
                '<div class="input-group-prepend">'+
                    '<span class="input-group-text"><i class="fas fa-align-right"></i></span>'+
                '</div>'+
                    '<textarea class="form-control" placeholder="Escribe aquí tu consulta" id="exampleFormControlTextarea1" rows="5"></textarea>'+
            '</div>'+
            '<div id="button" class="mt-4">'+
                '<p>Recuerda descargarte y rellenar el cuestionario para contratar o pedir información sobre los servicios <a href="javascript:void(0)">Aquí.</a></p>'+
                '<label for="avatar">Importa tu cuestionario:  </label>'+
                '<input type="file" id="avatar" name="avatar" accept=".doc,.docx">'+
                '</input>'+
                '</p>'+
                '<input id="input_button" type="submit" name="submit" class="btn btn-light btn-md" value="Enviar">'+
                '</div>'+
        '</div>'+
    '</form>'+
    '</div>';}
    document.getElementById("contact_form").style.opacity = "1";
    overlay.style.width = "100%";
    
    }
     
    

    $(document).ready(function(){
        //función para mostrar enlace del dossier
        $("#link").click(function(){
            $("#dossier").fadeToggle("slow")})

        //función para animar imagen
        $("#newsletter").mouseenter(function(){
            $("#newsletter").animate({width: '110%'})
        })
        $("#newsletter").mouseleave(function(){
            $("#newsletter").animate({width: '100%'})
        })
    })