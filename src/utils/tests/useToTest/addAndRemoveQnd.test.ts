const testAddToCard1Parameter1 = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
}];

const testAddToCard1Parameter2 = 2;

const testAddToCard1Parameter3 = "+";

const testAddToCard1ResponseDefault = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 2
}];

const testAddToCard2Parameter1 = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
}];

const testAddToCard2Parameter2 = 2;

const testAddToCard2Parameter3 = "-";

const testAddToCard2ResponseDefault = [];

const testAddToCard3Parameter1 = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 2
}];

const testAddToCard3Parameter2 = 2;

const testAddToCard3Parameter3 = "-";

const testAddToCard3ResponseDefault = [{
    "id": 2,
    "name": "test",
    "description": "test",
    "photo": "test",
    "price": "test",
    "amount": 1
}];

export default [
    [testAddToCard1Parameter1, testAddToCard1Parameter2, testAddToCard1Parameter3, testAddToCard1ResponseDefault],
    [testAddToCard2Parameter1, testAddToCard2Parameter2, testAddToCard2Parameter3, testAddToCard2ResponseDefault],
    [testAddToCard3Parameter1, testAddToCard3Parameter2, testAddToCard3Parameter3, testAddToCard3ResponseDefault]
];
