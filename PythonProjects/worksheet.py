# day_of_week = "Monday"
# print(day_of_week)
# day_of_week = "friday"
# print(f"I can't wait for {day_of_week}!")

# animal_input = input("What is your favorite animal?")

# color_input = input("What is your favorite color?")

# print(f"I've never seen a {color_input} {animal_input}")



#fav brekky = musubi, fav lunch = sushi, fav dinner = ravioli

# time_of_day = 1400
  
# if time_of_day < 1200:
#     which_meal = "musubi"
#     print(f"Breakfast is {which_meal}")
# elif time_of_day > 1200 and time_of_day < 1700:
#     which_meal = "sushi"
#     print(f"Lunch is {which_meal}")
# elif time_of_day > 1700:
#     which_meal = "ravioli"
#     print(f"Dinner is {which_meal}")
# else: 
#     print("Why are you trying to eat right now?")

# import random
# band_favorites = 

# if band_favorites >= 0 and band_favorites <= 2:
#     print("Beatles")
# elif band_favorites >= 3 and band_favorites <= 5:
#     print("Stones")
# elif band_favorites >= 6 and band_favorites <= 8:
#     print("Floyd")
# elif band_favorites == 9 or band_favorites == 10:
#     print("Hendrix")


# for number in range(7):
#     print("Python is cool!")


# for number in range(0,11):
#     print(number)


# for number in range(0,11):
#     if not number % 2:
#         print("hello")
#     else:
#         print("goodbye")    
 
    

# height = 49

# while height < 48:
#     print("cannot ride")
#     break
# else:
#     print("Time to ride")


# guess = input("what's the magic number?")
# whats_your_guess = int(guess)
# magic_number = 50


# while whats_your_guess != 50:
#     if whats_your_guess < 50 and whats_your_guess == range(39, 61):
#         print("too low")
#         break
#     elif whats_your_guess > 50:
#         print("too high")
#         break
#     elif whats_your_guess == range(39, 61):
#         print("getting warmer")
#         break
#     elif whats_your_guess == 50:
#         print(str(magic_number) + " " + "Great job, you guess it!")
#         break
        
        



def print_movie_name():
    fav_movie = "Return of the Jedi"
    print(fav_movie)            

print_movie_name()    



def music_choice():
    fav_band = input("what's your favorite band?")
    return fav_band

my_fav_band = music_choice()
print(my_fav_band)


#concert

def concert_display():
    musical_act = my_fav_band
    return musical_act

my_street = input("what street do you live on?")
musical_act = concert_display()
print(f"It would be great if {musical_act} played a show on {my_street}")