class Api::PostsController < ApplicationController
  before_action :set_post, except: [:create, :index]
  
  def index
    render json: Post.all
  end

  def create
    post = Post.create(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors }
    end
  end

  def show
    render json: @post
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: post.errors }
    end
  end

  def destroy
    @post.destroy
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:name, :content)
    end
end
