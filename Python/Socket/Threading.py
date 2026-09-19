import threading
import time

def task():
    for i in range(5):
        print("Task1:",i)
        time.sleep(1)

def task2():
    for i in range(5):
        print("Task2:",i)
        time.sleep(1)
def task3():
    for i in range(5):
        print("Task3:",i)
        time.sleep(1)

t1 = threading.Thread(target=task)
t2 = threading.Thread(target=task2)
t3 = threading.Thread(target=task3)

t1.start()
t2.start()
t3.start()

t1.join()
t2.join()
t3.join()

print("All task Completed")