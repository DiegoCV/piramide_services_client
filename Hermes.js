
class Hermes {

  constructor(servicio, local) {
    this.host = '192.168.1.35:5000';
    this.servicio = servicio;
    this.local = local;
  }

  obtener_url(indice_servicio){
    return "http://"+this.host + this.servicio.obtener_servicio(indice_servicio);
  }

  /*
  * Metodo encargado de validar las credenciales de un vendedor
  *
  * (Este metodo es el encargado de conectarse al servicio 2 de la api piramide_services)
  *
  * codigo : conjunto de numeros que identifican a la vendedora
  *
  * pass: contraseña de la vendedora, encritada en sha-256
  *
  */
  verificar_vendedor(codigo, pass) {
      $.ajax({
        url: this.obtener_url('s_2'),
        type: 'post',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ "codigo":codigo, "pass":pass }),
        dataType: 'json',
        success: function (data) {
          validar_verificar_vendedor(data);
        }
      });
  }

  insertar_sesion(titulo, descripcion, color, textcolor, inicio, anfitrion) {
      $.ajax({
        url: this.obtener_url('s_3'),
        type: 'post',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ "sesion":{ "titulo":titulo, "descripcion":descripcion, "color":color, "textcolor":textcolor, "inicio":inicio, "anfitrion":anfitrion } }),
        headers: {
          "x-access-token": this.local.obtener_token()
        },
        dataType: 'json',
        success: function (data) {
          console.log(data);
          validar_insertar_sesion(data);
        }
      });
  }


  listar_sesiones (){
    $.ajax({
        url: this.obtener_url('s_4'),
        type: 'get',
        headers: {
          "x-access-token": Local.obtener_token()
        },
        dataType: 'json',
        success: function (data) {
          validar_listar_sesiones(data);
        }
      });
  }

  validar_listar_sesiones(data){
    //inserto correctamente
    if( data.status == 1){
      // coloque su logica de respuesta
    }else{
      // coloque su logica de respuesta
    }
  }

  obtener_sesion(sesion_id){
     $.ajax({
        url: this.obtener_url('s_5'),
        type: 'get',
        data: {'sesion_id':sesion_id},
        headers: {
          "x-access-token": Local.obtener_token()
        },
        dataType: 'json',
        success: function (data) {
          validar_obtener_sesion(data);
        }
      });
  }

  validar_obtener_sesion(data){

  }

}