export function menuPage(){


    const content = document.querySelector("#content");

    content.innerHTML= " ";
    const menu = document.createElement('div');
    menu.textContent= 'Menu Of Happiness';
    content.appendChild(menu);


    const menu1 = document.createElement('div');
    menu1.textContent= 'Gobi Tandoori';
    menu1.className ="menu1";
    menu.appendChild(menu1);
    const img1 = document.createElement("img");
    img1.src = "/src/gobi.jpg";
    img1.setAttribute("height", "250");
    img1.setAttribute("width", "250");
    menu1.appendChild(img1);

    const menu2 = document.createElement('div');
    menu2.textContent= 'Mushroom Tandoori';
    menu2.className ="menu2";
    menu.appendChild(menu2);
    const img2 = document.createElement("img");
    img2.src = "/src/mush.jpg";
    img2.setAttribute("height", "250");
    img2.setAttribute("width", "250");
    menu2.appendChild(img2);

    const menu3 = document.createElement('div');
    menu3.textContent= 'Chaya';
    menu3.className ="menu3";
    menu.appendChild(menu3);
    const img3 = document.createElement("img");
    img3.src = "/src/tea.jpeg";
    img3.setAttribute("height", "250");
    img3.setAttribute("width", "250");
    menu3.appendChild(img3);

}