class BirdSerializer < ActiveModel::Serializer
  attributes :id, :name, :latin_name, :family, :image_src

  def image_src
    object.image.url
    # object.image.file
  end
end
