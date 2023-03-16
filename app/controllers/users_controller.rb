class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    render json: User.all, status: :ok
  end

  # GET /users/1
  def show
    render json: set_user, status: :ok
  end

  # for autologin feat
  def user 
    render json: @current_user, status: :ok
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id 
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    render json: set_user.update!(user_params), status: :accepted  
  end

  # DELETE /users/1
  def destroy
    set_user.destroy
    head.no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :username, :password, :email, :waist, :height, :weight, :age, :usual_size, :profile_picture)
    end
end
