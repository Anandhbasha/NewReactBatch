import socket

server = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
# TCP
# AF_INET ->IPv4
server.bind(("localhost",5000))
server.listen(1)
print("Waiting for message...")
client,addr = server.accept()
print("Client added sucessfully",addr)
mess = client.recv(1024).decode()
print("Client Says:",mess)
client.send("Received on server".encode())

client.close()
server.close()