from datetime import datetime


def getCurrentTime():
    now = datetime.now()
    currentTime = now.strftime("%H")
    return currentTime


def sayHello():
    currentTime = getCurrentTime()
    if currentTime > '18':
        print('Bonsoir')
    else:
        print('Bonjour')


def isPalindrome(text):
    if text == text[::-1]:
        print('Bien dit !')


def main():
    sayHello()
    x = input('Enter text : ')
    isPalindrome(x)
    print(x[::-1])


main()