let myHash = new Map([["a", 1], ["b", 2], ["c", 3]])
// lookup
myHash.get("a") // -> 1

myHash.keys()



[]

class Set {
    int* arrInteger = malloc();

    int items() {

    }

    void put(int value) {
        if (size(arrInteger) == 0) {
            ADD VALUE TO arrInteger
            return;
        }

        for (let i = 0; i < size(arrInteger); i++) {
            if (arrInteger[i] == value) {
                return;
            }
        }

        ADD VALUE TO arrInteger
    }
}

class Dictionary {
    String* arrKeys = malloc();
    int* arrValues = malloc(); 00000000|00000000|0|0|0|0|0|0|0|0

    void set(String key, int value) {
        1. SEARCH FOR INDEX of KEY in arrKeys
        2. if exists
            2.1 REPLACE item at arrValues[INDEX]
           if not exists
            2.2 Insert key into arrKeys according to sort algorithm
    }
}