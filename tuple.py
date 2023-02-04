# row1 = ["Tom", 67, "Berlin"]
row1 = ("Tom", 67, "Berlin")
row2 = ("Jerry", 16, "Aachen")

def convert_currency(value_euro, to_currency):
    if to_currency == "USD":
        result = value_euro / 1.05
    else:
        raise ValueError

    return (to_currency, result)

conversion_usd = convert_currency(20, "USD")
conversion_vnd = convert_currency(20, "VND")