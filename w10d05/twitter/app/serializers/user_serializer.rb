class UserSerializer < ActiveModel::Serializer
  # attributes :id, :username, :firstname, :lastname
  attributes :id, :username, :fullname
  has_many :posts #embedding the posts here

  def fullname
    "#{object.firstname} #{object.lastname}" #object referes ro the ctuak use object # this is string concatination
  end
end
