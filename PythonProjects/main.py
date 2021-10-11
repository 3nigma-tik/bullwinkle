from customer import Customer
from product import Product

customer_one = Customer('Mary')
customer_two = Customer('Bob')

bike = Product('Bicycle', 100, 'sporting goods')
album = Product('Record album', 30, 'music')
coffee_cup = Product('Coffee cup', 10, 'home goods')


print(customer_one)
customer_one.add_product_to_cart(bike)
customer_one.add_product_to_cart(album)
customer_one.add_product_to_cart(coffee_cup)

customer_one.view_products_in_cart()

total = customer_one.shopping_cart.calculate_total()

print(total)

customer_one.shopping_cart.empty_cart()

customer_one.view_products_in_cart()

total = customer_one.shopping_cart.calculate_total()

print(total)

print('the end')