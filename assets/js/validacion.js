


document.getElementById('formulario').addEventListener('submit', async(e) => {
    e.preventDefault();


    // Variables
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Expresion regular
    let ExpRegularText = /^\s+$/;
    let ExpRegularEmail = !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email));
    let ExpregTel = !(/^\d{3}\d{3}\d{3}$/.test(phone));
    let ExpregNum = /^([0-9])*$/;

    // Validación

    if(nombre == null || nombre.length <2 || ExpRegularText.test(nombre)){
        alertify.error('El campo nombre es invalido');
        nombre = document.getElementById('nombre').style.boxShadow = "0 0 5px red";
        return false;   
    }
    else if(nombre == null || nombre.length >=35 || ExpRegularText.test(nombre)){
        alertify.error("El nombre no debe sobrepasar los 35 caracteres");
        return false; 
    }
    else if(ExpregNum.test(nombre)){
        alertify.error("El valor no es una letra");
        return false; 
    }
    else if(email == null || ExpRegularEmail){
        alertify.error("El campo email es invalido");
        email = document.getElementById('email').style.boxShadow = "0 0 5px red";
        return false; 
       
    }
    else if(phone == null || ExpregTel){
        alertify.error("El campo phone es invalido");
        phone = document.getElementById('phone').style.boxShadow = "0 0 5px red";
        return false; 
       
    }

    let msg = alertify.message('Cargando');
        msg.delay(3).setContent('Cargando ... ');

        alertify.success("Registro de datos fue exitoso")
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';


        let formData = new FormData();


        formData.append('nombre', nombre);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('send', '');

        window.location.href = "./presentacion.php";
        
        await fetch('./enviar.php', {
            method: 'POST',
            body: formData
        })
        .catch(error => console.error('Error:', error))

});




