class UserSerializer < ActiveModel::Serializer
  has_many :messages_sent
  has_many :messages_received
  attributes :id, :username, :email
end
