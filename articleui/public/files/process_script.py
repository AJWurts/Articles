import sys
# 
assert len(sys.argv) > 1

fileName = sys.argv[1]

def tab_counter(line):
    if line == '':
        return -1
    index = 0
    current = line[index]

    while current == ' ':
        index += 1
        current = line[index]

        if index == len(line) - 1:
            return -1
    
    return index

with open(fileName, 'r') as inputFile:
    lines = inputFile.read().split('\n')

    output_string = "<Code.Code>\n"

    for l in lines:
        tabs = int(tab_counter(l))
        if tabs == -1:
            output_string += "<br/>\n"
            continue


        print(tabs)
        output_string += "<Code.Line tabs={" + str(int(tabs / 4)) + "}>\n"
        if l[0] == '#':
            output_string += "<Code.Comment>" + l + "</Code.Comment>\n"
        else:
            output_string += l[tabs:] + "\n"

        output_string += "</Code.Line>\n"

    output_string += "</Code.Code>"
    print(output_string)
        