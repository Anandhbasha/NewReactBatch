# GrandParent->Father->Son->GrandSon
class Grandpa:
    _bike="RE"
    _house =4
class Father(Grandpa):
    pass
class son(Father):
    pass
class Granson(son):
    pass

# G = Granson()
# print(G.bike)
# G.bike="Duke"
# print(G.bike)
f =Father()
print(f._bike)
