class BankAccount:
    def balance(self,amount):
        self.bal = amount
    def __add__(self,other):
        return self.bal+other.bal
    def __sub__(self,other):
            return self.bal-other.bal

acc1 = BankAccount()
acc1.balance(5000)
acc2 = BankAccount()
acc2.balance(10000)

total = acc1+acc2
print("Total Balance is:",total)
total = acc1-acc2
print("Total Balance is:",total)