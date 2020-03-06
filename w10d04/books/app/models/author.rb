class Author < ApplicationRecord
  has_many :books
  has_many :genres, through: :books
end

def full_name
  "#{first_name} #{last_name}"
end
