// const { response } = require("express")

async function main() {
    let response = await fetch('http://localhost:3001/listbooks')
    let result = await response.json()
    result.forEach(newBook)
}

function newBook(book) {
    let root = document.getElementById('root')
    let list = document.createElement('li')
    list.innerHTML = book.title
    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity
    let save = document.createElement('button')
    save.innerHTML = 'Save'
    save.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    list.append(quantityInput, save)
    root.append(list)
}

main()