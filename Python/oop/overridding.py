class Res:
    def order(self):
        print("Order Placed Sucessfully")
class VRes(Res):
    def order(self):
        print("Order placed from Veg Res")
class NVRes(Res):
    def order(self):
        print("Order placed from Non-Veg Res")


# nv = NVRes()
# v = VRes()

# totalRev = nv+v
