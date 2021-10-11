class AlarmClock:
    def __init__(self):
        self.time = ""
        self.alarm_on = False
        self.alarm_time = ""

    def set_time(self):
        self.time_is_set = input("what would you like the time set to?")
        print("the time is now", self.time_is_set)

    def alarm_is_on(self):
        self.is_it_on = input("would you like the alarm on, 'yes' or 'no'?")
        if self.is_it_on == "yes":
            self.is_it_on = True
            print("lets go ahead and set the alarm")
            self.set_alarm_time()
            return self.is_it_on
        elif self.is_it_on == "no":
            print("youre all set, enjoy your new clock")
        
    def set_alarm_time(self):
        if self.is_it_on == True:
            self.alarm_time = input("what time would you like to set your alarm to?")
            print("you're current alarm time is set to" + self.alarm_time)
        elif self.is_it_on == False:
            return self.is_it_on