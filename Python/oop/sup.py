class schoolName:
    name = "Abc School"
class Students(schoolName):
    name = "Kaviya"
    def show(self):
        print(self.name,"is Studiying in",super().name)

S1 = Students()
S1.show()
sc = schoolName