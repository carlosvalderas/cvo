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