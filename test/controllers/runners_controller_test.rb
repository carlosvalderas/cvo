require 'test_helper'

class RunnersControllerTest < ActionController::TestCase
  setup do
    @runner = runners(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:runners)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create runner" do
    assert_difference('Runner.count') do
      post :create, runner: { alergia: @runner.alergia, apellido_materno: @runner.apellido_materno, apellido_paterno: @runner.apellido_paterno, ciudad: @runner.ciudad, club: @runner.club, correo: @runner.correo, declaracion: @runner.declaracion, direccion: @runner.direccion, dorsal: @runner.dorsal, fecha_nac: @runner.fecha_nac, lugar: @runner.lugar, nombres: @runner.nombres, numero_emergencia: @runner.numero_emergencia, pago: @runner.pago, pais: @runner.pais, peblema: @runner.peblema, persona_emergencia: @runner.persona_emergencia, prescripcion: @runner.prescripcion, rut: @runner.rut, rut_pago: @runner.rut_pago, sexo: @runner.sexo, talla: @runner.talla, telefono: @runner.telefono, tiempo: @runner.tiempo, tratamiento: @runner.tratamiento }
    end

    assert_redirected_to runner_path(assigns(:runner))
  end

  test "should show runner" do
    get :show, id: @runner
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @runner
    assert_response :success
  end

  test "should update runner" do
    patch :update, id: @runner, runner: { alergia: @runner.alergia, apellido_materno: @runner.apellido_materno, apellido_paterno: @runner.apellido_paterno, ciudad: @runner.ciudad, club: @runner.club, correo: @runner.correo, declaracion: @runner.declaracion, direccion: @runner.direccion, dorsal: @runner.dorsal, fecha_nac: @runner.fecha_nac, lugar: @runner.lugar, nombres: @runner.nombres, numero_emergencia: @runner.numero_emergencia, pago: @runner.pago, pais: @runner.pais, peblema: @runner.peblema, persona_emergencia: @runner.persona_emergencia, prescripcion: @runner.prescripcion, rut: @runner.rut, rut_pago: @runner.rut_pago, sexo: @runner.sexo, talla: @runner.talla, telefono: @runner.telefono, tiempo: @runner.tiempo, tratamiento: @runner.tratamiento }
    assert_redirected_to runner_path(assigns(:runner))
  end

  test "should destroy runner" do
    assert_difference('Runner.count', -1) do
      delete :destroy, id: @runner
    end

    assert_redirected_to runners_path
  end
end
