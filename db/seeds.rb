# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
categories = Category.create([
	{tipo: 'Elite', sexo: 'Hombre', edad: '18 en adelante'},
	{tipo: 'Elite', sexo: 'Mujer', edad: '18 en adelante'},
	{tipo: 'Amateur', sexo: 'Hombre', edad: '18 - 29'},
	{tipo: 'Amateur', sexo: 'Mujer', edad: '18 - 29'},
	{tipo: 'Familiar', sexo: 'Hombre', edad: '18 en adelante'},
	{tipo: 'Familiar', sexo: 'Mujer', edad: '18 en adelante'}
])

runners = Runner.create([
	{rut: '18274397-0', sexo: 'Masculino', category_id: '1', nombres: 'Sergio Andrés', apellido_paterno: 'Azócar', apellido_materno: 'Salas', fecha_nac: '01/09/1990', pais: 'Chile', ciudad: 'Purranque', telefono: '72647813', correo: 'asdasd@asdasd.com', talla: 'S', declaracion: 'true', rut_pago: '18274397-0'},
	{rut: '16274397-0', sexo: 'Masculino', category_id: '1', nombres: 'Marcos', apellido_paterno: 'Ahumada', apellido_materno: 'Contreras', fecha_nac: '21/07/1990', pais: 'Chile', ciudad: 'Purranque', telefono: '72647813', correo: 'asdasd@jmujmu.com', talla: 'S', declaracion: 'true', rut_pago: '16274397-0'},
	{rut: '18274397-0', sexo: 'Masculino', category_id: '3', nombres: 'Christian', apellido_paterno: 'lara', apellido_materno: 'arellano', fecha_nac: '14/04/1990', pais: 'Chile', ciudad: 'Purranque', telefono: '72647813', correo: 'asdasd@yuytu.com', talla: 'S', declaracion: 'true', rut_pago: '18274397-0'},
	{rut: '17274397-0', sexo: 'Femenino', category_id: '2', nombres: 'Nicole', apellido_paterno: 'Sade', apellido_materno: 'Oliva', fecha_nac: '27/11/1990', pais: 'Argentina', ciudad: 'Buenos Aires', telefono: '72647813', correo: 'asdasd@qweqwe.com', talla: 'S', declaracion: 'true', rut_pago: '17274397-0'},
	{rut: '19274397-0', sexo: 'Masculino', category_id: '5', nombres: 'Pablo Andrés', apellido_paterno: 'Azócar', apellido_materno: 'Salas', fecha_nac: '04/01/1990', pais: 'Chile', ciudad: 'Purranque', telefono: '72647813', correo: 'asdasd@xcvxcv.com', talla: 'S', declaracion: 'true', rut_pago: '19274397-0'}
])