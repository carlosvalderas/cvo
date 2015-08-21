class CreateRunners < ActiveRecord::Migration
  def change
    create_table :runners do |t|
      t.string :rut
      t.string :sexo
      t.string :nombres
      t.string :apellido_paterno
      t.string :apellido_materno
      t.date :fecha_nac
      t.string :pais
      t.string :ciudad
      t.string :direccion
      t.integer :telefono
      t.string :correo
      t.string :club
      t.string :talla
      t.string :persona_emergencia
      t.integer :numero_emergencia
      t.string :peblema
      t.string :alergia
      t.string :prescripcion
      t.string :tratamiento
      t.boolean :declaracion
      t.string :rut_pago
      t.boolean :pago
      t.integer :dorsal
      t.integer :lugar
      t.time :tiempo
      t.references :category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
