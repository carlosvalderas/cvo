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

				}else if($( "#runner_autorizacion_nombre" ).val()==""){
					$( "#runner_autorizacion_nombre" ).addClass("invalido");
					$( "#runner_autorizacion_nombre" ).focus();

				}else if($( "#runner_autorizacion" ).val()==""){
					$( "#runner_autorizacion" ).addClass("invalido");
					$( "#runner_autorizacion" ).focus();

				}
				
				$( ".inscripcion-autorizacion" ).addClass( "hide" );
				$( ".inscripcion-contacto" ).removeClass( "hide" );
			});
		}else{
			$( ".inscripcion-datos" ).addClass( "hide" );
			$( ".inscripcion-contacto" ).removeClass( "hide" );
		}


	});
	$( ".next3js" ).click(function() {

		if($( "#runner_telefono" ).val()==""){
			$( "#runner_telefono" ).addClass("invalido");
			$( "#runner_telefono" ).focus();

		}else if($( "#runner_correo" ).val()==""){
			$( "#runner_correo" ).addClass("invalido");
			$( "#runner_correo" ).focus();

		}else if($( "#runner_talla" ).val()==""){
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

		if($( "#runner_declaracion" ).val()==""){
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
		}
	});
	
});