
SECRET_KEY = 'django-insecure-j-xcw&@!b1#h2wx!xjs(9o_pp7u8#2h$m7-6&56y17a@)*u&o2'



DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'music_library_database',
        'USER': 'root',
        'PASSWORD': 'SQLpass1!',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}