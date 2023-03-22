document.getElementById('formulario').addEventListener('submit', (e) => {
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

    if(nombre == null || nombre.length <2 || nombre.maxlength=="40" || ExpRegularText.test(nombre)){
        alertify.error('El campo nombre es inválido');
        nombre = document.getElementById('nombre').style.boxShadow = "0 0 5px red";
        return false;   
    }

    else if(ExpregNum.test(nombre)){
        alertify.error("El valor no es una letra");
        return false; 
    }
    
    else if(email == null || ExpRegularEmail){
        alertify.error("El campo email es inválido");
        email = document.getElementById('email').style.boxShadow = "0 0 5px red";
        return false; 
       
    }
    else if(phone == null || ExpregTel || phone.maxlength=="9"){
        alertify.error("El campo phone es inválido");
        phone = document.getElementById('phone').style.boxShadow = "0 0 5px red";
        return false; 
       
    }
        Swal.fire({
                icon: 'success',
                html: `<h1>GRACIAS POR EL REGISTRO</h1>
                <p style="font-size: 18px;"><strong>Nos contactaremos con usted lo más pronto posible</strong></p>
                <br>
                `,
                width: '500px',
                
                // showCancelButton: true,
                confirmButtonText: "OK",
                // cancelButtonText: "Cancelar",
            })
            .then(resultado => {
                if (resultado.value) {
                    // Hicieron click en "OK"
                    // console.log("*se elimina la venta*");

                    document.getElementById('nombre').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('phone').value = '';


                    let formData = new FormData();


                    formData.append('nombre', nombre);
                    formData.append('email', email);
                    formData.append('phone', phone);
                    formData.append('send', '');

                    window.location.href = "./index.php";
                    
                    fetch('./enviar.php', {
                        method: 'POST',
                        body: formData
                    })
                    .catch(error => console.error('Error:', error));
        
                    console.log("Corrreo enviado correctamente");

                }else{
                    // Dijeron que no
                    console.log("*NO se elimina la venta*");
                }
        });

});