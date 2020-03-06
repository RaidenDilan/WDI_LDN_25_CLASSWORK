class ApplicationController < ActionController::API
  before_action :authenticate_user! # before anything make sure the user is authenticated

  def authenticate_user! # ! i guess it means IMPORTANT
    render json: { errors: "Unauthorized" }, status: 401 unless user_sign_in?
  end

  def user_sign_in? # ? will give the method a bolleans value
    # this is gonna return a true or false value
    # if there is a current_user then return true
    # !! return a true value
    !!current_user
  end

  def current_user
    # error handling
    # if there was no user_id then find try to look for the user with User.find.
    # this is so we can use the posts owner and let the appropiate users be able to edit and delete their posts
    @current_user ||= User.find(decoded_token[:id]) if id_found?

  rescue # if there is an error then rescue or catch the error
    nil
  end

  private

  def id_found?
    # make sure a token was successfully generated.
    # make sure there is a token.
    # make sure the decoded_token is true.
    # finally check if there is a property of ID[:id].
    token && decoded_token && decoded_token[:id]
  end

  def decoded_token
    @decoded_token ||= Auth.decode(token) if token # decode the token if the token exists
  end

  def token
    @token ||= if request.headers["Authorization"].present? # ||= if token instance already exists it won't bother to find it. but if it's false go look inside the...

      request.headers["Authorization"].split.last # find that header and spit it then show the last part.

    end
  end
end
