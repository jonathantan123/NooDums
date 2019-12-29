require "stripe"



class ChargesController < ApplicationController

    def session
        
 

        Stripe.api_key = APIKEY


            session = Stripe::Checkout::Session.create(

            payment_method_types: ['card'],
            line_items: [
               
            {
                name: 'Dumplings',
                description: 'Dumpling Order',
                images: ['https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'],
                amount:  params[:total],
                currency: 'usd',
                quantity: 1,
            }

        
        ],
            success_url: 'http://localhost:3001/',
            cancel_url: 'http://localhost:3001/cart',
            )


            render json: session
            



            puts "hi"
    
    
    end 
     





end
