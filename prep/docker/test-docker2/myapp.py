       
    
# Corrected Code
user_name = input("Enter your name to store in file or press enter to proceed: ")
if user_name:
    with open('user_info.txt', 'a') as file:
        file.write(user_name + "\n")

show_info = input("Do you want to show the information? (y/n): ")
if show_info.lower() == 'y':
    try:
        with open('user_info.txt', 'r') as file:
            content = file.readlines()
    except Exception as e:
        print(f"An error occurred: {e}")
    else:
        for line in content:
            print(f'{line.rstrip()}')
