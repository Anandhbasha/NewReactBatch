# class Parennt:
    # code
# class Child(Parennt):


# class Father:
#     property = "House"
# class Son(Father):
#     pass

# s = Son()
# print(s.property)

class School:
    schoolName = "Abc School"
    def classRoom(self):
        print("All Can use ClassRooms")
    def teachers(self):
        print("All can use Teachers")
class Student(School):
    def StudentName(self,name):
        print("Student Name is:",name,"He is Studying in",self.schoolName)
    

S1 = Student()
S1.StudentName("Karthi")
print(S1.schoolName)
S1.classRoom()
S1.teachers()
S2 = Student()
S2.StudentName("Vimal")
print(S2.schoolName)
S2.classRoom()
S2.teachers()