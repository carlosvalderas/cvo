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
  validates :telefono, presence: true
  validates :correo, presence: true
  validates :talla, presence: true
  validates :rut_pago, presence: true
  validates :category_id, presence: true


  before_save :uppercases
  def uppercases
    sexo.upcase!
    if autorizacion_nombre
      autorizacion_nombre.upcase!
    end
    nombres.upcase!
    apellido_paterno.upcase!
    apellido_materno.upcase!
    pais.upcase!
    ciudad.upcase!
    correo.upcase!
    if club
      club.upcase!
    end
    if persona_emergencia
      persona_emergencia.upcase!
    end
    if problema
      problema.upcase!
    end
    if alergia
      alergia.upcase!
    end
    if prescripcion
      prescripcion.upcase!
    end
    if tratamiento
      tratamiento.upcase!
    end
  end
end