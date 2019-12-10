
number1 = input("Enter Number 1: ")
number2 = input("Enter Number 2: ")
operator = input("Enter Operator (+, -, /, *): ")

number1 = int(number1)
number2 = int(number2)

result = 0
if operator == "+":
    result = number1 + number2
elif operator == "-":
    result = number1 - number2
elif operator == '/':
    result = number1 / number2
elif operator == '*':
    result = number1 * number2

print(result)
    

