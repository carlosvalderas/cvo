class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :tazones
      t.integer :tricotas
      t.integer :bandanas
      t.string :tallas_tricotas
      t.integer :total
      t.references :runner, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
