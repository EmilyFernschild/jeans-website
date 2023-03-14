class JeansController < ApplicationController
  before_action :set_jeans, only: %i[ show update destroy ]
  skip_before_action :authorize, only: :index

  # GET /jeans
  def index
    render json: Jean.all, status: :ok
  end

  # GET /jeans/1
  def show
    render json: @jeans
  end

  # POST /jeans
  def create
    @jeans = Jean.new(jeans_params)

    if @jeans.save
      render json: @jeans, status: :created, location: @jeans
    else
      render json: @jeans.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jeans/1
  def update
    if @jeans.update(jeans_params)
      render json: @jeans
    else
      render json: @jeans.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jeans/1
  def destroy
    @jeans.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_jeans
      @jeans = Jean.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def jeans_params
      params.require(:jeans).permit(:store, :name, :color, :size, :length, :waist, :price, :rating, :description, :jean_image, :user_id)
    end
end
