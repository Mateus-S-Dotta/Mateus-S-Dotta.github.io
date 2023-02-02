const testAddToCard1Parameter1 = [];

const testAddToCard1Parameter2 = {
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
}

const testAddToCard1ResponseDefault = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
}];

const testAddToCard2Parameter1 = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
}];

const testAddToCard2Parameter2 = {
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
};

const testAddToCard2ResponseDefault = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 2
}]

export default [
    [testAddToCard1Parameter1, testAddToCard1Parameter2, testAddToCard1ResponseDefault],
    [testAddToCard2Parameter1, testAddToCard2Parameter2, testAddToCard2ResponseDefault]
];
