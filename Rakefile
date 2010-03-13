require 'pathname'

PREFIX = Pathname.new(File.dirname(__FILE__)).realpath

begin
  require 'jeweler'
  
  Jeweler::Tasks.new do |s|
    s.name = "jeweler"
    s.executables = "moneta-service"
    s.summary = "moneta-service exposes a Moneta data store over HTTP."
    s.email = "roger@thefifthcircuit.com"
    s.homepage = "http://github.com/thefifthcircuit/moneta-service"
    s.description = "Use moneta-service to share data across processes. Combined with turnstile, access to resources can be limited strategically."
    s.authors = ["Roger Jungemann"]
    s.files =  FileList[
      "[A-Z]*",
      "{bin, lib, public, views}/**/*"
    ]
    s.add_dependency 'net/ssh'
  end
rescue LoadError
  puts "Jeweler, or one of its dependencies, is not available. Install it with: sudo gem install technicalpickles-jeweler -s http://gems.github.com"
end