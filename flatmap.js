const data = [
    {
        id: 1,
        name: "Hoang",
        categories: ["js"]
    },
    {
        id: 2,
        name: "Khanh",
        categories: ["js", "php"]
    },
    {
        id: 3,
        name: "Lukas",
        categories: ["js", ".net", "python"]
    }
]

const filteredData = [
    [
        {
            id: 1,
            name: "Hoang"
        },
        {
            id: 2,
            name: "Khanh"
        },
        {
            id: 3,
            name: "Lukas"
        }
    ],
    [
        {
            id: 3,
            name: "Lukas",
            categories: ["js", ".net", "python"]
        }
    ]
]