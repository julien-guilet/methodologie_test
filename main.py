from datetime import datetime

def sayHello():
    hour = datetime.now().strftime('%H')
    if (hour < '12'):
        print('Good Morning')
    elif (hour < '18'):
        print('Good Afternoon')
    else:
        print('Good Evening')

def sayGoodbye():
    hour = datetime.now().strftime('%H')
    if (hour < '12'):
        print('Goodbye and Good Morning')
    elif (hour < '18'):
        print('Goodbye and Good Afternoon')
    else:
        print('Goodbye and Good Evening')

def palindrome(text):
    if text == text[::-1]:
        print('Bien dit!')


def ifProgramExit(text):   
    if text == 'exit':
        sayGoodbye()
        exit()
    else:
        return True

def returnInput():
    while True:
        text = input('Enter text : ')
        palindrome(text)
        print(text)
        ifProgramExit(text)



sayHello()
returnInput()