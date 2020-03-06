require 'test_helper'

class SkyscannerControllerTest < ActionDispatch::IntegrationTest
  test "should get flights" do
    get skyscanner_flights_url
    assert_response :success
  end

end
