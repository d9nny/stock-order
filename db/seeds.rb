# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Company.create!(name: "Sainsburys", budget:1000)
# Company.create!(name: "Tugo", budget:2000)
# Company.create!(name: "Tuco", budget:3000)
# User.create!(email: "dan@dan.com", password: "Password1")
# User.create!(email: "ed@ed.com", password: "Password2")
# User.create!(email: "tom@tom.com", password: "Password3")

User.create!(email: "admin@admin.com", password: "Password1", admin: true)
