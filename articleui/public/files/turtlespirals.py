import turtle

bob_the_turtle = turtle.Turtle()
bob_the_turtle.pencolor('blue')

forward_distance = 20

for i in range(1000):
    bob_the_turtle.forward(forward_distance)
    bob_the_turtle.left(30)

    forward_distance += 1

turtle.done()