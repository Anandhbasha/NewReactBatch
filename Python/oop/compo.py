class Hospital:
    hospitalName = "Abc Hospital"
    def specality(self,docs):
        self.docNames = docs
        print(self.hospitalName,"is Specially for Cardiac because of",self.docNames)
class Doctor:    
    def __init__(self,docName):
        H = Hospital()
        self.doc = docName
        H.specality(self.doc)

D = Doctor("Raman")