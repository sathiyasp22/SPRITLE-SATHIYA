def calculate():
    operation = input('''
Please type in the math operation you would like to complete:
1 for addition
2 for subtraction
3 for multiplication
4 for division
''')
    

    num1 = int(input('Enter the first number(btw 0 to 9): '))
    num2 = int(input('Enter the second number(btw 0 to 9): '))
    if operation == '1':
            print('{} + {} = '.format(num1, num2))
            print(int(num1 + num2))
    elif operation == '2':
            print('{} - {} = '.format(num1, num2))
            print(int(num1 - num2))
    elif operation == '3':
            print('{} * {} = '.format(num1, num2))
            print(int(num1 * num2))
    elif operation == '4':
            print('{} / {} = '.format(num1, num2))
            print(int(num1 / num2))

    else:
            print('You have not typed a valid operator, please run the program again.')


calculate()

#OUTPUT:TEST CASE PASSED
'''
Please type in the math operation you would like to complete:
1 for addition
2 for subtraction
3 for multiplication
4 for division
4
Enter the first number(btw 0 to 9): 8
Enter the second number(btw 0 to 9): 3
8 / 3 = 
2'''