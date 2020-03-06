class PostSerializer < ActiveModel::Serializer
  attributes :id, :body
  # has_one :user
  # you can use has_one or belongs_to since the post has the user referenced
  # belongs_to and has_one arent the same in the model databse, it's how we render the data.
  belongs_to :user
end
