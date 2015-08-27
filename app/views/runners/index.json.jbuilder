json.array!(@runners) do |runner|
  json.extract! runner, :id, :rut, :sexo, :nombres, :apellido_paterno, :apellido_materno, :fecha_nac, :pais, :ciudad, :direccion, :telefono, :correo, :club, :talla, :persona_emergencia, :numero_emergencia, :peblema, :alergia, :prescripcion, :tratamiento, :declaracion, :rut_pago, :pago, :dorsal, :lugar, :tiempo, :category_id
  json.url runner_url(runner, format: :json)
end
