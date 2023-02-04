let url = 'https://domain.example.com/api/employees' // --> obj2

let obj1 = {
    id: "1",
    name: "Hoang"
}

let obj2 = {
    id: "2",
    name: "Khanh"
}

let arr = [obj1, obj2]

let setA = new Set(["abc","azcxzdadsad","axc","azcxzdadsad"]);

let setB = new Set([1,2,4]);

function uniq(arr, identity) {
    let ids = new Set()
    let result = []
    arr.forEach(element => {
        let id = identity(element)
        if (id in ids) {
            return
        }

        result.push(element)
        ids.add(id)
    });

    return result
}

function swap(arr) {
    if (arr.length < 2) {
        return
    }

    let localArr = [...arr]

    let temp = localArr[0]
    localArr[0] = localArr[1]
    localArr[1] = temp

    return localArr
}

function renameArr(arr) {
    let localArr = [...arr]
    localArr.forEach(element => {
        element.name += "1" 
    })
}

function deepClone(obj) {
    if (typeof obj !== 'object') {
        return obj
    }

    if (obj === null) {
        return null
    }
    let result;

    if (Array.isArray(obj)) {
        result = []
        obj.forEach(element => {
            result.push(deepClone(element))
        })
    }

    result = {}
    Object.entries(obj).forEach([key, value] => {
        result[key] = deepClone(value)
    })

    return result
}