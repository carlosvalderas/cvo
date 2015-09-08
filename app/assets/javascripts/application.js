// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(function() {

	//evita que se envíe el formulario al precionar ENTER
	$('form').keypress(function(e){   
		if(e == 13){
			return false;
		}
	});
	//evita que se envíe el formulario al precionar ENTER
	$('input').keypress(function(e){
		if(e.which == 13){
			return false;
		}
	});
	//Etapas del Formulario
	$( ".next1js" ).click(function() {
		if($( "#runner_rut" ).val() == "" ){
			$( "#runner_rut" ).addClass("invalido");
			$( "#runner_rut" ).focus();

		}else if(VerificaRut($( "#runner_rut" ).val()) == false){
			$( "#runner_rut" ).addClass("invalido");
			$( "#runner_rut" ).focus();

		}else if($( "#runner_sexo" ).val()==""){
			$( "#runner_sexo" ).addClass("invalido");
			$( "#runner_sexo" ).focus();

		}else if($( "#runner_category_id" ).val()==""){
			$( "#runner_category_id" ).addClass("invalido");
			$( "#runner_category_id" ).focus();

		}else if($( "#runner_nombres" ).val()==""){
			$( "#runner_nombres" ).addClass("invalido");
			$( "#runner_nombres" ).focus();

		}else if($( "#runner_apellido_paterno" ).val()==""){
			$( "#runner_apellido_paterno" ).addClass("invalido");
			$( "#runner_apellido_paterno" ).focus();

		}else if($( "#runner_apellido_materno" ).val()==""){
			$( "#runner_apellido_materno" ).addClass("invalido");
			$( "#runner_apellido_materno" ).focus();

		}else if($( "#runner_fecha_nac" ).val()==""){
			$( "#runner_fecha_nac" ).addClass("invalido");
			$( "#runner_fecha_nac" ).focus();

		}else if($( "#runner_pais" ).val()==""){
			$( "#runner_pais" ).addClass("invalido");
			$( "#runner_pais" ).focus();

		}else if($( "#runner_ciudad" ).val()==""){
			$( "#runner_ciudad" ).addClass("invalido");
			$( "#runner_ciudad" ).focus();

		}else if ($("#runner_category_id").val() == 2){
			$( ".inscripcion-datos" ).addClass( "hide" );
			$( ".inscripcion-autorizacion" ).removeClass( "hide" );

			$(".js-autorizado-nombre").val($("#runner_nombres").val() 
			+ " " +
			$("#runner_apellido_paterno").val() 
			+ " " + 
			$("#runner_apellido_materno").val());

			$(".js-autorizado-rut").val($("#runner_rut").val());
			$( ".next2js" ).click(function() {
				if($( "#runner_autorizacion_rut" ).val()==""){
					$( "#runner_autorizacion_rut" ).addClass("invalido");
					$( "#runner_autorizacion_rut" ).focus();

				}else if(VerificaRut($( "#runner_autorizacion_rut" ).val()) == false){
					$( "#runner_autorizacion_rut" ).addClass("invalido");
					$( "#runner_autorizacion_rut" ).focus();

				}else if($( "#runner_autorizacion_nombre" ).val()==""){
					$( "#runner_autorizacion_nombre" ).addClass("invalido");
					$( "#runner_autorizacion_nombre" ).focus();

				}else{
				if($( "#runner_autorizacion" ).prop("checked") === false){
					$( "#runner_autorizacion" ).addClass("invalido");
					$( "#runner_autorizacion" ).focus();
				}
				else{
					$( ".inscripcion-autorizacion" ).addClass( "hide" );
					$( ".inscripcion-contacto" ).removeClass( "hide" );
				}}
			});
		}else{
			$( ".inscripcion-datos" ).addClass( "hide" );
			$( ".inscripcion-contacto" ).removeClass( "hide" );
		}


	});
	$( ".next3js" ).click(function() {
		var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		if($( "#runner_telefono" ).val()==""){
			$( "#runner_telefono" ).addClass("invalido");
			$( "#runner_telefono" ).focus();

		}else if($( "#runner_correo" ).val()==""){
			$( "#runner_correo" ).addClass("invalido");
			$( "#runner_correo" ).focus();

		}else if (!regex.test($( "#runner_correo" ).val().trim())) {
		        $( "#runner_correo" ).addClass("invalido");
				$( "#runner_correo" ).focus();
		}
		 else if($( "#runner_talla" ).val()==""){
			$( "#runner_talla" ).addClass("invalido");
			$( "#runner_talla" ).focus();
		}else{
			$( ".inscripcion-contacto" ).addClass( "hide" );
			$( ".inscripcion-medico" ).removeClass( "hide" );
		}

	});
	$( ".next4js" ).click(function() {

		$( ".inscripcion-medico" ).addClass( "hide" );
		$( ".inscripcion-declaracion" ).removeClass( "hide" );
	});
	$( ".next5js" ).click(function() {

		if($( "#runner_declaracion" ).prop("checked") === false){
			$( "#runner_declaracion" ).addClass("invalido");
			$( "#runner_declaracion" ).focus();
		}else{
			$( ".inscripcion-declaracion" ).addClass( "hide" );
			$( ".inscripcion-rut" ).removeClass( "hide" );
		}
	});
	$( ".next6js" ).click(function() {
		if($( "#runner_rut_pago" ).val()==""){
			$( "#runner_rut_pago" ).addClass("invalido");
			$( "#runner_rut_pago" ).focus();
			event.preventDefault();
		}
		else if(VerificaRut($( "#runner_rut_pago" ).val()) == false){
			$( "#runner_rut_pago" ).addClass("invalido");
			$( "#runner_rut_pago" ).focus();
			event.preventDefault();
		}
	});
	
});



function VerificaRut(rut) {
    if (rut.toString().trim() != '' && rut.toString().indexOf('-') > 0) {
        var caracteres = new Array();
        var serie = new Array(2, 3, 4, 5, 6, 7);
        var dig = rut.toString().substr(rut.toString().length - 1, 1);
        rut = rut.toString().substr(0, rut.toString().length - 2);

        for (var i = 0; i < rut.length; i++) {
            caracteres[i] = parseInt(rut.charAt((rut.length - (i + 1))));
        }

        var sumatoria = 0;
        var k = 0;
        var resto = 0;

        for (var j = 0; j < caracteres.length; j++) {
            if (k == 6) {
                k = 0;
            }
            sumatoria += parseInt(caracteres[j]) * parseInt(serie[k]);
            k++;
        }

        resto = sumatoria % 11;
        dv = 11 - resto;

        if (dv == 10) {
            dv = "K";
        }
        else if (dv == 11) {
            dv = 0;
        }

        if (dv.toString().trim().toUpperCase() == dig.toString().trim().toUpperCase())
            return true;
        else
            return false;
    }
    else {
        return false;
    }
}


function filtrar_categoria(){

		var xy= calculo_edad();
		var sex = $( "#runner_sexo" ).val();
		var cat = $( "#tipo_cat" ).val();
		$(document).ready(function(){
			if(sex == "MASCULINO"){
				if(cat == "ELITE"){
					if(xy >= 18){
						$( "#runner_category_id" ).val("1");
					}
				}
				if(cat == "AMATEUR"){
					if(xy < 18 && xy >= 15){
						$( "#runner_category_id" ).val("2");
											}
					if(xy <= 29 && xy >= 18){
						$( "#runner_category_id" ).val("3");
											}
					if(xy <= 34 && xy >= 30){
						$( "#runner_category_id" ).val("4");
											}
					if(xy <= 39 && xy >= 35){
						$( "#runner_category_id" ).val("5");
											}
					if(xy <= 44 && xy >= 40){
						$( "#runner_category_id" ).val("6");
											}
					if(xy <= 49 && xy >= 45){
						$( "#runner_category_id" ).val("7");
											}
					if(xy <= 54 && xy >= 50){
						$( "#runner_category_id" ).val("8");
											}
					if(xy <= 59 && xy >= 55){
						$( "#runner_category_id" ).val("9");
											}
					if(xy <= 64 && xy >= 60){
						$( "#runner_category_id" ).val("10");
					}
					if(xy >= 65){
						$( "#runner_category_id" ).val("11");
					}
				}

			}
			if(sex == "FEMENINO"){
				if(cat == "ELITE"){
					if(xy >= 18){
						$( "#runner_category_id" ).val("12");
					}
				}
				if(cat == "AMATEUR"){
					if(xy <= 29 && xy >= 18){
						$( "#runner_category_id" ).val("13");
					}
					if(xy <= 39 && xy >= 30){
						$( "#runner_category_id" ).val("14");
					}
					if(xy <= 49 && xy >= 40){
						$( "#runner_category_id" ).val("15");
					}
					if(xy >= 50){
						$( "#runner_category_id" ).val("16");
					}

				}
			}
			if(cat == "FAMILIAR"){
				$( "#runner_category_id" ).val("17");
				select_filtro(17);
			}

	});
	var filter = $( "#runner_category_id" ).val();
	select_filtro(filter);
}

function calculo_edad(){
	var fecha = $( "#runner_fecha_nac" ).val();
	// Si la fecha es correcta, calculamos la edad
    var values=fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // cogemos los valores actuales
    //var fecha_hoy = new Date();
    //var ahora_ano = fecha_hoy.getYear();
    //var ahora_mes = fecha_hoy.getMonth()+1;
    //var ahora_dia = fecha_hoy.getDate();
    var ahora_ano = 116;
    var ahora_mes = 05;
    var ahora_dia = 23;

    // realizamos el calculo
    var edad = (ahora_ano + 1900) - ano;
    if ( ahora_mes < mes )
    {
        edad--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia))
    {
        edad--;
    }
    if (edad > 1900)
    {
        edad -= 1900;
    }
	//alert(edad);
	return edad;

}

function select_filtro(filter){
	$(document).ready(function(){
	  $("#runner_category_id option").each(function(){
	   if ($(this).val() == filter) {
	    $(this).show();
	   } else {
	    $(this).hide();
	   }
	  })
	 });
}

