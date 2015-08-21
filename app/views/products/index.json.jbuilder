json.array!(@products) do |product|
  json.extract! product, :id, :tazones, :tricotas, :bandanas, :tallas_tricotas, :total
  json.url product_url(product, format: :json)
end
