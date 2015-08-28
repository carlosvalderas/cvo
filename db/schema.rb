# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150821212733) do

  create_table "categories", force: :cascade do |t|
    t.string   "tipo"
    t.string   "sexo"
    t.string   "edad"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.integer  "tazones"
    t.integer  "tricotas"
    t.integer  "bandanas"
    t.string   "tallas_tricotas"
    t.integer  "total"
    t.integer  "runner_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "products", ["runner_id"], name: "index_products_on_runner_id"

  create_table "runners", force: :cascade do |t|
    t.string   "rut"
    t.string   "sexo"
    t.integer  "category_id"
    t.string   "autorizacion_nombre"
    t.string   "autorizacion_rut"
    t.boolean  "autorizacion"
    t.string   "nombres"
    t.string   "apellido_paterno"
    t.string   "apellido_materno"
    t.date     "fecha_nac"
    t.string   "pais"
    t.string   "ciudad"
    t.integer  "telefono"
    t.string   "correo"
    t.string   "club"
    t.string   "talla"
    t.string   "persona_emergencia"
    t.integer  "numero_emergencia"
    t.string   "problema"
    t.string   "alergia"
    t.string   "prescripcion"
    t.string   "tratamiento"
    t.boolean  "declaracion"
    t.string   "rut_pago"
    t.boolean  "pago"
    t.integer  "dorsal"
    t.integer  "lugar"
    t.time     "tiempo"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "runners", ["category_id"], name: "index_runners_on_category_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
