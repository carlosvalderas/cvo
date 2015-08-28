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
	//Etapas del Formulario
	$( ".next1js" ).click(function() {
		if($( "#runner_rut" ).value==""){

		}else if($( "#runner_sexo" ).value==""){

		}


		$( ".inscripcion-datos" ).addClass( "hide" );
		$( ".inscripcion-contacto" ).removeClass( "hide" );
	});
	$( ".next2js" ).click(function() {
		$( ".inscripcion-contacto" ).addClass( "hide" );
		$( ".inscripcion-medico" ).removeClass( "hide" );
	});
	$( ".next3js" ).click(function() {
		$( ".inscripcion-medico" ).addClass( "hide" );
		$( ".inscripcion-declaracion" ).removeClass( "hide" );
	});
	$( ".next4js" ).click(function() {
		$( ".inscripcion-declaracion" ).addClass( "hide" );
		$( ".inscripcion-rut" ).removeClass( "hide" );
	});

	

});