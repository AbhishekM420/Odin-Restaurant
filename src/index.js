import { homepage } from "./home";
import { contactPage } from "./contact";
import { menuPage } from "./menu";
import './style.css';

homepage();

const content = document.getElementById("content");
 const hmbtn = document.querySelector(".homebtn");
 const menubtn = document.querySelector(".menubtn");
 const contactbtn = document.querySelector(".contactbtn");

hmbtn.addEventListener("click",homepage);
menubtn.addEventListener("click",menuPage);
contactbtn.addEventListener("click",contactPage);
