#DOT NOTATION

class CellPhone:
    def __init__(self, model, phone_number, contacts, messages, vibrate_on_off):
        self.model = model
        self.phone_number = phone_number
        self.contacts = contacts
        self.messages = messages
        self.vibrate_on_off = True

    def which_model(self):
        