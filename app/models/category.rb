class Category < ActiveRecord::Base
	has_many :runners
	def categoria_completa
	   "#{tipo}  #{sexo}  #{edad}"
	end
end
