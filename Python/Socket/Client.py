import socket

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

client.connect(("localhost",5000))

message = input("Enter your message:")

client.send(message.encode())

res = client.recv(1024).decode()
print("Server says:",res)
client.close()