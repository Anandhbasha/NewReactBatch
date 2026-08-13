class Director:
    def show(self):
        print("He is a director")
class Singer:
    def show(self):
        print("He is a Singer")
class Hero:
    def show(self):
        print("Hero")
class Pradeep(Singer,Director,Hero):
    pass

p = Pradeep()
p.show()