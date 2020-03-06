class User < ApplicationRecord
  has_secure_password validations: false #whenever we create a new user it would run bcriypt for us and do all that kind of stuff like hashing.

  has_many :posts

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true, unless: :oauth_login?
  validates :password, presence: true, confirmation: true, unless: :oauth_login?, on: :create # check for password confirmation only on create

  def oauth_login?
    github_id.present? # is there a github id present.
  end
end
