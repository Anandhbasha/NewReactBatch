class BankAccount:
    __balance = 500
    def deposit(self,amount):
        if amount>100:
            self.__balance+=amount
        else:
            print("Please Enter the valid Amount")
    def withdrawl(self,amount):
        if amount>100 and self.__balance>amount:
            self.__balance-=amount
        else:
            print("Please Enter the valid Amount")
    def showBalnce(self):
        return self.__balance

acc1 = BankAccount()
print(acc1.showBalnce())
acc1.deposit(5000)
print(acc1.showBalnce())
acc1.withdrawl(5000)
print(acc1.showBalnce())