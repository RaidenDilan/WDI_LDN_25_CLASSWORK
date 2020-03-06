class Bird < ApplicationRecord
  mount_uploader :image, ImageUploader
end
