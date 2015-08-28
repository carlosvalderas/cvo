class RunnersController < ApplicationController
  before_action :set_runner, only: [:show, :edit, :update, :destroy]

  # GET /runners
  # GET /runners.json
  def index
    @runners = Runner.all.order("LOWER(apellido_paterno) ASC").page(params[:page]).per_page(3)
    @corredores = Runner.all.order("LOWER(apellido_paterno) ASC")
    @category = Category.all
    respond_to do |format|
      format.html
      format.xlsx { render xlsx: "runners", template: "runners/index" }
      format.json { render json: Runner.all}
    end
  end

  # GET /runners/1
  # GET /runners/1.json
  def show
  end

  # GET /runners/new
  def new
    @runner = Runner.new
    @category = Category.all
  end

  # GET /runners/1/edit
  def edit
  end

  # POST /runners
  # POST /runners.json
  def create
    @runner = Runner.new(runner_params).upcase

    respond_to do |format|
      if @runner.save
        format.html { redirect_to @runner, notice: 'Corredor inscrito correctamente.' }
        format.json { render :show, status: :created, location: @runner }
      else
        format.html { render :new }
        format.json { render json: @runner.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /runners/1
  # PATCH/PUT /runners/1.json
  def update
    respond_to do |format|
      if @runner.update(runner_params)
        format.html { redirect_to @runner, notice: 'Corredor actualizado correctamente.' }
        format.json { render :show, status: :ok, location: @runner }
      else
        format.html { render :edit }
        format.json { render json: @runner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /runners/1
  # DELETE /runners/1.json
  def destroy
    @runner.destroy
    respond_to do |format|
      format.html { redirect_to runners_url, notice: 'Corredor eliminado correctamente.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_runner
      @runner = Runner.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def runner_params
      params.require(:runner).permit(:rut, :sexo, :category_id, :nombres, :apellido_paterno, :apellido_materno, :fecha_nac, :pais, :ciudad, :direccion, :telefono, :correo, :club, :talla, :persona_emergencia, :numero_emergencia, :peblema, :alergia, :prescripcion, :tratamiento, :declaracion, :rut_pago, :pago, :dorsal, :lugar, :tiempo)
    end
end
