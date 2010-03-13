require 'sinatra/base'
require 'moneta'
require 'moneta/memory'

module Moneta
  class Service < Sinatra::Base
    configure do
      set :db, Moneta::Memory.new
    end
    
    get "/:key" do
      options.db[params[:key]]
    end
    
    post  "/:key" do
      options.db[params[:key]] = params[:value]
    end
    
    post "/:key/delete" do
      options.db.delete params[:key]
    end
    
    post "/:key/has_key" do
      options.db.has_key(params[:key]).to_json
    end
    
    post "/:key/store" do
      value = params[:value]
      options = JSON.parse(params[:options]) rescue({})
      
      options.db.store(key, value, options)
    end
    
    post "/:key/update_key" do
      options = JSON.parse(params[:options]) rescue({})
      
      options.db.update params[:key], options
    end 
    
    post "/clear" do
      options.db.clear
      
      ""
    end
  end
end

run Rack::URLMap.new({
  "/" => Rack::File.new("public"),
  "/store" => Moneta::Service.new
})