export function homepage(){

    const content = document.querySelector("#content");
    content.innerHTML= " ";
    const test = document.createElement('div');
    test.className = "test";
    test.textContent= 'At (RN), we’re serving up more than (TF). In fact, (RN) Famous (recipe) is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high. Our signature recipe, that we have perfected for more than four decades, is rubbed with a secret blend of seasonings, cured and roasted on a rotisserie with pecan wood for up to six hours before it’s topped with (RN) signature herb-garlic butter, then carved tableside.(RN) specializes idelicious food featuring fresh ingredients and masterful preparation by the (RN) culinary team. Whether you’re ordering a multi-course meal or grabbing a drink and pizza at the bar, (RN’s) lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.he approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now – save room for dessert';
    content.appendChild(test);

}