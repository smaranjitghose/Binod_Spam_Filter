import os

def BinodSearch(filename):
    '''
    Checking for the presence of the word "binod" in a given text file
    '''
    # Opening our file in read mode
    with open(filename,"r") as f: 
        # Getting the content of our file
        content = f.read()
    if "binod" in content.lower(): # To account for all possible uppercase and lowercase combinations of the word Binod we convert the entire string to lowercase
        return True
    else:
        return False

if __name__  == "__main__":
    # Listing the contents of the directory
    dir_contents = os.listdir()
    # Counter for keeping track of number of files spammed with Binod
    binod_count = 0
    # Tranversing through each of the contents
    for item in dir_contents:
        # If we find a text file
        if item.endswith('txt'):
            if BinodSearch(item):
                 binod_count += 1
                 print(f"{item} is spammed with 'Binod'")
            else:
                print(f"{item} is not spammed with 'Binod' ")
    # Printing the number of files we found to be spammed with Binod
    print(f"Number of file spammed with Binod:{binod_count}")
