json.extract! album, :id, :title, :photo, :release_date, :price, :artists_id, :created_at, :updated_at
json.url album_url(album, format: :json)
