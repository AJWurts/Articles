# Part 1: Retrieve user input using the built-in <C>input</C> function
number1 = input("Enter Number 1: ")
number2 = input("Enter Number 2: ")
operator = input("Enter Operator (+, -, /, *): ")

# Part 2: Parse the input and turn the strings into integers
number1 = int(number1)
number2 = int(number2)

# Part 3: Process the Operator using an if statement.
result = 0
if operator == "+":
    result = number1 + number2
elif operator == "-":
    result = number1 - number2
elif operator == '/':
    result = number1 / number2
elif operator == '*':
    result = number1 * number2


# Display the result to console.
print(result)
    

