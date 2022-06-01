let index = 1

function nextMenu() {
    const menuImg = document.querySelector('#menu-img');
    if (index === 4) {
        index = 1
        menuImg.src = `./asset/images/coffee${index}.jpg`
    } else {
        index += 1
        menuImg.src = `./asset/images/coffee${index}.jpg`
    }
}