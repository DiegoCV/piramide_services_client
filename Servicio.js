class Servicio {

   obtener_servicio(indice){

  	switch(indice){

  		case 's_1':
  			return '/vendedor/registrar';

		case 's_2':
			return '/vendedor/verificar';

		case 's_3':
			return '/sesion/agendar';

		case 's_4':
			return '/sesion/listar';

		case 's_4':
			return '/sesion/obtener';

		default:
			return 'servicio no encontrado';

  	} 

  }

}

