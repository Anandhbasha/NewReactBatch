from abc import abstractmethod

class Payment:
    @abstractmethod
    def Pay(self):
        pass
class Gpay(Payment):
    def Pay(self):
        print("Pay Using Gpay")
class phonePe(Payment):
    def Pay(self):
        print("Paied Using phonePe")

G = Gpay()
G.Pay()
p =phonePe()
p.Pay()