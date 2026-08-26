# # pip install pandas
import pandas as pd

# s1 = pd.Series([10,20,30],index=['a','b','c'])
# print(s1)

# data = {"apple":3,"banana":5,"orange":6}
# s3 = pd.Series(data)
# # print(s3)
# # print(s3*2)
# # print(s3+s3)
# print(s3[s3>3])


# dataframe
data = {
    'Name':["Arun","Ajay","Arul"],
    'age':[20,21,11],
    'city':["cbe","erode","salem"]
}

df = pd.DataFrame(data)
# print(df)

# df.to_csv("output.csv",index=False)
df.to_excel("outputs.xlsx",index=[1,2,3,4])
print("Data Created Sucessfully")

