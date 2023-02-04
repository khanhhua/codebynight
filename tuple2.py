argu = ("USD", 2, 40)

def convert(value_euro, *paramlist, **kwargs): # variadic parameter
    # paramlist = ["USD", "CSD", "BPL"]
    print(paramlist[0])
    print(paramlist[1])
    print(paramlist[2])

    print(type(kwargs))

    return 0

target_currencies = ("USD", "CSD", "BPL")

convert(20, *target_currencies)
