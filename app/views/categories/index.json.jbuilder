json.array!(@categories) do |category|
  json.extract! category, :id, :tipo, :sexo, :edad
  json.url category_url(category, format: :json)
end
