function validar_verificar_vendedor(data) {
	console.log(data.status + "hhhh");
    //inserto correctamente
    if( data.status == "1"){
      local.insertar_token(data.jwt);
      console.log("caramba, que suerte tienes");
    }else{
      console.log("Tu suerte acaba de terminarse");
    }
  }

function validar_insertar_sesion(data){
    //inserto correctamente
    if( data.status == 1){
      // coloque su logica de respuesta
      console.log(data.sesion);
      console.log(data.usuario);
      console.log("caramba, que suerte tienes");
    }else{
      // coloque su logica de respuesta
    	console.log("Tu suerte acaba de terminarse");
    }
  }