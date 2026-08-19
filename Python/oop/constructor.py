class Student:
    # Student():
    def __init__(self,name):
        self.stuName = name
    def courseName(self,courseName):
        self.courseName = courseName
        print("Student",self.stuName,"is Studying",self.courseName)

S1 = Student("Aravind")
S1.courseName("Python")