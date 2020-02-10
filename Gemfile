source "https://rubygems.org"
ruby "2.4.2"

gem "rails", "5.2.4.1"

gem "awesome_print"
gem "bcrypt"
gem "font-awesome-rails"
gem "high_voltage"
gem "jquery-rails"
gem "pg", ">= 0.18", "< 1.0"
gem "puma"
gem "sass-rails"
gem "sprockets-rails"
gem "stripe"
gem "turbolinks"
gem "uglifier"

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
group :assets do
  gem "coffee-rails"
end

group :development, :test do
  gem "bundler-audit", require: false
  gem "dotenv-rails"
  gem "launchy"
  gem "pry-rails"
  gem "pry-byebug"
  gem "rspec-rails"
end

group :development do
  gem "bullet"
  gem "spring-commands-rspec"
  gem "web-console", "~> 3.1.1"
end

group :test do
  gem "capybara"
  gem "codeclimate-test-reporter", "~> 1.0.0"
  gem "factory_girl_rails"
  gem "database_cleaner"
  gem "rake"
  gem "simplecov"
  gem "webmock"
end
