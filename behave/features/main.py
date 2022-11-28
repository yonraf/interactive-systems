from behave.__main__ import main as behave_main


def main():
    
    # Starts test
    behave_main("behave/features/rentingApartment.feature")

if __name__ == '__main__':
    main()