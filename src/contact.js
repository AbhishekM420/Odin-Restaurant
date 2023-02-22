export function contactPage(){
    const content = document.querySelector("#content");
    content.innerHTML= " ";
    
    const contactDetails = document.createElement('div');
    contactDetails.textContent= 'Contact Information'
    content.appendChild(contactDetails);

    const emailId = document.createElement('p');
    emailId.textContent= 'Email : BreadAndToast@fakemail.com';
    contactDetails.appendChild(emailId);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent= 'Phone :4206969420' ;
    contactDetails.appendChild(phoneNumber);

    const Address= document.createElement('p');
    Address.textContent= 'Bread And Toast Bakers \nNo 420 69 Avenue \n Sunset Boulevard \Fakeville';
    contactDetails.appendChild(Address);

    const open  = document.createElement('p');
    open.textContent= 'Open on All Days And At All Times';
    contactDetails.appendChild(open);

}