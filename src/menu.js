export function menuPage(){


    const content = document.querySelector("#content");

    content.innerHTML= " ";
    const menu = document.createElement('div');
    menu.textContent= 'Menu Of Happiness';
    content.appendChild(menu);

    const menu1 = document.createElement('div');
    menu1.textContent= 'Gobi Tandoori';
    menu.appendChild(menu1);

    const menu2 = document.createElement('div');
    menu.textContent= 'Mushroom Tandoori';
    menu.appendChild(menu2);

    const menu3 = document.createElement('div');
    menu3.textContent= 'Chaya';
    menu.appendChild(menu3);

}