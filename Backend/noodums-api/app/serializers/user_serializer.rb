class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email_address, :items, :first_name, :last_name, :phone_number, :orders
end
