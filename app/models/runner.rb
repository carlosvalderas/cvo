class Runner < ActiveRecord::Base
  belongs_to :category
  has_many :products
  validates :rut, presence: true
  validates :sexo, presence: true
  validates :nombres, presence: true
  validates :apellido_paterno, presence: true
  validates :apellido_materno, presence: true
  validates :fecha_nac, presence: true
  validates :pais, presence: true
  validates :ciudad, presence: true
  validates :direccion, presence: true
  validates :telefono, presence: true
  validates :correo, presence: true
  validates :talla, presence: true
  validates :rut_pago, presence: true
  validates :category_id, presence: true
end