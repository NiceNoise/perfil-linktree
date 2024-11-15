//definicion de variables DOM

const containerCabecera=document.getElementById("container-Cabecera");

const namePerson = document.createElement('p');
namePerson.id="namePerson";
namePerson.className="txt-name";
namePerson.textContent="Gino Segura";
containerCabecera.appendChild(namePerson);

const descriptionPerson = document.createElement('p');
descriptionPerson.id="descriptionPerson";
descriptionPerson.className="txt-description";
descriptionPerson.textContent="Secuencias y Percusiones";
containerCabecera.appendChild(descriptionPerson);


// Aquí puedes agregar interactividad adicional si lo deseas, como animaciones o eventos.
document.querySelectorAll('.link-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

