from shopping_cart import ShoppingCart

class Customer:
    def __init__(self, name):
        self.name = name
        self.shopping_cart = ShoppingCart()

    def add_product_to_cart(self, product):
        self.shopping_cart.add_product_to_list(product)

    def view_products_in_cart(self):
        print(f'{self.name} has the following items in their cart:')
        for product in self.shopping_cart.products:
            print(product)

    def __str__(self):
        return self.name