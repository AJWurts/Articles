import turtle

# Create lists of colors
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

# Create turtle and initialize pen size and pen color
bob_the_turtle = turtle.Turtle()
bob_the_turtle.pensize(30)
bob_the_turtle.pencolor("red")

# Set initial forward distance movement
forward_distance = 20

for i in range(1000):
    # Move turtle foward and turn
    bob_the_turtle.forward(forward_distance)
    bob_the_turtle.left(29)

    # Calculate color_index
    # Using modules takes i, the movement counter, and changes it into a value 
    # betnween 0 and 5 to access the color list
    color_index = i % len(colors)

    # Set color by accessing the color_index value of colors
    bob_the_turtle.pencolor(colors[color_index])

    #Increase foward distance by 1 to create spiral
    forward_distance += 1

# Make program wait before closing
turtle.done()