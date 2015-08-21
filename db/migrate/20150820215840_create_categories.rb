class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :tipo
      t.string :sexo
      t.string :edad

      t.timestamps null: false
    end
  end
end
