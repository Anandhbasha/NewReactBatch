# kT1 = 50
# kT2 = 52
# kT3 = 54

# Bt1 = 61
# Bt2 = 62
# Bt3 = 63

# Ht1 = 52
# Ht2 = 55
# Ht3 = 56


# def add(s1,s2,s3,name):
#     total = s1+s2+s3
#     print("Student name is",name,"Total mark is:",total)

# add(52,55,56,"kausi")
# add(61,65,56,"Boopathi")
# add(71,73,56,"Hari")


# def greet():
#     print("Hello welcome")

# greet()


# def user(name,age):
#     print(name,age)

# user(age=18,name="Ajay")


# def user(name ="Karthick"):
#     print(name)

# user(name="Ajay")

# def add(*a):
#     # tuple
#     total = 0
#     for i in a:
#         total+=i
#     print(total)

# # add(10,20)
# # add(10,20,30)
# # add(10,20,30,40)


# def persons(**values):
#     print(values)

# persons(name="Bala",age=32)
# persons(name="Raja",age=31,course = "Python")


# lambda

# square = lambda x:x*x
# print(square(2))

# return
a=100
def add():
    global a
    a=10
    b=20
    return a+b

print(add())
print(a)