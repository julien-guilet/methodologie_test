from datetime import datetime


def getCurrentTime():
    now = datetime.now()
    currentTime = now.strftime("%H")
    return currentTime


def sayHello():
    currentTime = getCurrentTime()
    if currentTime > '18':
        print('Bonsoir !')
    else:
        print('Bonjour !')


def sayGoodbye():
    currentTime = getCurrentTime()
    if currentTime > '18':
        print('Bonne soirée !')
    else:
        print('Au revoir !')


def isPalindrome(text):
    if text == text[::-1]:
        print('Bien dit !')


def main():
    sayHello()
    x = input('Entrez du texte : ')
    isPalindrome(x)
    print(x[::-1])
    sayGoodbye()


main()