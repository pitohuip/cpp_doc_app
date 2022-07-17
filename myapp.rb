require 'sinatra'

get '/' do
  haml :index
end

get '/navigation' do
  haml :'navigation/cpp'
end

get '/qt_navigation' do
  haml :'navigation/qt'
end

get '/contact_me' do
  haml :contact_me
end

# PAGES
get '/navigation/vars' do
  markdown :'pages/variables', :layout_engine => :haml, :layout => :layout_md
end

get '/navigation/data_types' do
  markdown :'pages/data_types', :layout_engine => :haml, :layout => :layout_md
end

get '/navigation/type_conversions' do
  markdown :'pages/type_conversions', :layout_engine => :haml, :layout => :layout_md
end
