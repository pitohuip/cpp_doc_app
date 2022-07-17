require 'sinatra'

get '/' do
  haml :index
end

get '/navigation' do
  haml :'navigation/cpp'
end

get '/test' do
  markdown :'pages/variables', :layout_engine => :haml, :layout => :layout
end
