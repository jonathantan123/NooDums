class User < ApplicationRecord

    has_many :orders
    has_many :favorites 
    has_many :items, through: :favorites
    
    validates :email_address, uniqueness: true
    has_secure_password 

end
