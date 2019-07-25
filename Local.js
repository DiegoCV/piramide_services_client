class Local {

	insertar_token(token){
		localStorage.setItem('mi_secret_token', token);
	}

	obtener_token(){
		return localStorage.getItem('mi_secret_token');
	}

}
