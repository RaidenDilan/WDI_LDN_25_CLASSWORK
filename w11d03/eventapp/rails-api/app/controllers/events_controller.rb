class EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  skip_before_action :authenticate_user!, only: [:index, :show] # for any page except for index and show pages, ...

  # GET /events
  def index
    @events = Event.all

    render json: @events
  end

  # GET /events/1
  def show
    render json: @event
  end

  # POST /events
  def create
    @event = Event.new(event_params)
    # @event.user = current_user # before we save the new event into our databse we will attach the current user tot the new event.

    if @event.save
      render json: @event, status: :created, location: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /events/1
  def update
    return render json: { errors: ["Unauthorized"] } if @event.user != current_user # if user is not logged in then don't let them access and edit the events in INSOMNIA. so don't return the rest of the mehtod unless logged in.
    if @event.update(event_params)
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /events/1
  def destroy
    return render json: { errors: ["Unauthorized"] } if @event.user != current_user
    @event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def event_params
      params.require(:event).permit(:name, :date, :location, :user_id, attendee_ids:[])
    end
end
