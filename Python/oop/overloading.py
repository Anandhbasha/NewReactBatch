class Calculator:
    def add(self,a,b,c=0,d=0):
        print(a+b+c+d)


c = Calculator()
c.add(10,20)
c.add(10,20,30)
c.add(10,20,30,40)


a=10
a="Arun"
print(type(a))