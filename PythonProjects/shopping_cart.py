class ShoppingCart:
    def __init__(self):
        self.products = []

    def calculate_total(self):
        total_value = 0
        number_of_items = 0
        for product in self.products:
            total_value += product.price
            number_of_items += 1
        print(f'Cart contains {number_of_items} products with combined value of ${total_value}.00')
        return total_value

    def add_product_to_list(self, product):
        self.products.append(product)
        print(f'{product} was added to cart')

    def empty_cart(self):
        self.products.clear()
