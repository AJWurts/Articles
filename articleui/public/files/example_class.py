class Dog():
    def __init__(self, name, human_years, breed):
        self.name = name
        self.dog_years = human_years * 7
        self.breed = breed
    
    def pet(self):
        print(name, "wags their tail.")
    
    def feed(self, food_amount):
        print(name, "eats")

    def getBreed(self):
        return self.breed
    
    def setAge(self, human_years):
        self.dog_years = human_years * 7


