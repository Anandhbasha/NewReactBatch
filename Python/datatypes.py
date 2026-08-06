# a=10
# print(a)

# a,b,c,d = 10,20,30,40
# print(a,b,c,d,sep='-')

# # a->b
# # b->c
# # c->d
# # d->a
# # temp = b
# # b=a
# # a=d
# # d=c
# # c=temp


# # a->b
# # b->c
# # c->d
# # d->a
# b,c,d,a = a,b,c,d
# print(a,b,c,d)


# datatype
# simple datatype
# # int
# a=10
# print(type(a))
# # float
# b=10.2
# print(type(b))
# # String
# name = "userName"
# print(type(name))
# # bool
# isAlive = True
# print(type(isAlive))


# complex
# list
list1 = [10,20,30,40,50,60,70,10,20]
print(list1[0])
print(list1[1])
print(list1[2])
print(list1[3])
# slicing
print(list1[:3])
# reverse indexing
print(list1[::3])
# step to increment
print(list1[::-2])

list1[3] = 100
list1[6] = 800
print(list1)
# list datatype is mutable
# tuple
tup = (700,800,520,954,537)
# tup[0] = 124
print(tup[0])
print(tup[::-1])
# set
# to remove duplictaes
s = {10,10,10,10,20,20,20,30,30,40,30,40}
# randomly assending
# 
print(s)
# dict
person = {
    "name":"arun",
    "age":30
}
print(person["name"])

news = list(s)
news = tuple(s)
print(news)
print(set(list1))