class MessageSerializer < ActiveModel::Serializer
  belongs_to :sender
  belongs_to :receiver
  attributes :id, :body, :subject
end
