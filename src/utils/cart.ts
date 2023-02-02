export function removeItem(arrayToRemove, idToFind) {
    const localIndex = arrayToRemove.findIndex((element) => element.id === idToFind);
    const localObject = [...arrayToRemove];
    localObject.splice(localIndex, 1);
    return localObject;
}

export function addToCard(originalArray, objectToAdd) {
    const localIndex = originalArray.findIndex(nowElement => nowElement.id === objectToAdd.id);
    if (localIndex === -1) {
        const toReturn = [...originalArray, {
            photo: objectToAdd.photo,
            price: objectToAdd.price,
            name: objectToAdd.name,
            description: objectToAdd.description,
            id: objectToAdd.id,
            amount: 1
        }];
        console.log(toReturn)
        return toReturn;
    } else {
        const localObject = [...originalArray];
        localObject[localIndex].amount += 1;
        console.log(localObject)

        return localObject;
    }
}

export function addAndRemoveQnd(originalArray, idToFind, moreOrLess) {
    const localIndex = originalArray.findIndex(nowElement => nowElement.id === idToFind);
    const localObject = [...originalArray];
    if (moreOrLess === "-") {
        localObject[localIndex].amount -= 1;
        if (localObject[localIndex].amount <= 0) {
            localObject.splice(localIndex, 1);
        }
    } else if (moreOrLess === "+") {
        localObject[localIndex].amount += 1;
    }
    return localObject;
}