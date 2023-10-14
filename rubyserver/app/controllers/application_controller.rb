class ApplicationController < ActionController::API
    # protect_from_forgery with: :exception
    before_action :authenticate_user!
#     before_action :set_cors_headers

#     private

#   def set_cors_headers
#     response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
#   end

end
