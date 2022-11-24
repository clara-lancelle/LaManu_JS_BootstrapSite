"use strict";

//navbar js by me !

let navBtn = document.querySelector('.navbar-toggler');
let navToShow = document.querySelector('#navbarColor01');
navBtn.addEventListener('click', () => {
  if (navToShow.classList.contains('show')) {
    navBtn.setAttribute('aria-expanded', 'false');
    navToShow.classList.remove('show');
  } else {
    navBtn.setAttribute('aria-expanded', 'true');
    navToShow.classList.add('show');
  }

})



//Exo 1 : recup value input / compare / valid or not

if (document.location.href == 'http://localhost/COURS/La_Manu/_JS/JS2/Exo1.html') {

  let pass = document.querySelector('#floatingInput');
  let confirmPass = document.querySelector('#floatingPassword');

  let btn = document.querySelector('#validBtn');

  if (btn) {
    btn.addEventListener('click', () => {
      if (pass.value !== '') {

        if (pass.value == confirmPass.value) {
          confirmPass.className = 'form-control is-valid';
          pass.className = 'form-control is-valid';
        } else {
          confirmPass.className = 'form-control is-invalid';
          pass.className = 'form-control is-invalid';
        }
      }
    })
  }

}

//Exo 2 : regex to verify : name / firstname / age / mail

if (document.location.href == 'http://localhost/COURS/La_Manu/_JS/JS2/Exo2.html') {

  let exo2Form = document.getElementById('exo2Form');

  if (exo2Form) {

    //Regex for email 
    exo2Form.mail.addEventListener('change', () => {
      if (exo2Form.mail.value !== '') {
        if (/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/.test(exo2Form.mail.value) !== true) {

          exo2Form.mail.className = 'form-control is-invalid';
        } else {
          exo2Form.mail.className = 'form-control is-valid';
        }
      }
    })

    //regex for age
    exo2Form.age.addEventListener('change', () => {
      if (exo2Form.age.value !== '') {
        if (/^([0-9]){1,2}$/.test(exo2Form.age.value) !== true) {
          // cherche first caractère number , last caractere number entre 0 et 3 fois
          exo2Form.age.className = 'form-control is-invalid';
        } else {
          exo2Form.age.className = 'form-control is-valid';
        }
      }
    })

    //regex for name / firstname

    let regex = (input) => {
      input.addEventListener('change', () => {
        if (input.value !== '') {
          if (/^([a-zA-Zà-ż \-]){1,50}$/i.test(input.value) !== true) {
            // cherche first and last caractere = string + accent
            return input.className = 'form-control is-invalid';
          } else {
            return input.className = 'form-control is-valid';
          }
        }
      })
    }

    regex(exo2Form.name);
    regex(exo2Form.firstname);

  }

}


// Exo 3 : donne à l'utilisateur la possibilité de cloner un champs

if (document.location.href == 'http://localhost/COURS/La_Manu/_JS/JS2/Exo3.html') {


  let clonerBtn = document.getElementById('clonerBtn');

  clonerBtn.addEventListener('click', () => {
    let toClone = document.getElementById('toClone0');
    let clone = toClone.cloneNode(true);
    let array = document.querySelectorAll('.toClone');
    if (array.length == 1) {
      let i = Number(array[0].id.charAt(array[0].id.length - 1)) + 1;
      clone.querySelector('input').setAttribute('id', 'firstname' + i);
      clone.setAttribute('id', 'toClone' + i);
      clone.querySelector('label').setAttribute('for', 'firstname2' + i);
      i++;
      return toClone.after(clone);
    } else {
      let last = array[array.length - 1];
      let i = Number(last.id.charAt(last.id.length - 1)) + 1;
      clone.querySelector('input').setAttribute('id', 'firstname' + i);
      clone.setAttribute('id', 'toClone' + i);
      clone.querySelector('label').setAttribute('for', 'firstname2' + i);
      i++;
      return last.after(clone);
    }

  });
}



//First input 

/*
  let buttons = document.getElementsByTagName("input");

  for (let button of buttons) {
    button.addEventListener("click", (e) => {
      let buttonPressed = e.target;  // Get ID of Clicked Element
      let parent = buttonPressed.parentNode;
      let clone = parent.cloneNode(true);
      let i = Number(clone.id.charAt(clone.id.length - 1)) + 1;
      clone.querySelector('input').setAttribute('id', 'firstname' + i);
      clone.setAttribute('id', 'toClone' + i);
      clone.querySelector('label').setAttribute('for', 'firstname2' + i);
      clone.querySelector('.btn').setAttribute('id', i);
      i++;
      return parent.after(clone);
    });
  }


  //After the first input / observe DOM for changes !

  // Select the node that will be observed for mutations
  const targetNode = document.querySelector('.form-group');
  console.log(targetNode);
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (observer) => {

    let buttons = document.getElementsByTagName("input");

    for (let button of buttons) {
      button.addEventListener("click", (e) => {
        let buttonPressed = e.target;  // Get ID of Clicked Element
        let parent = buttonPressed.parentNode;
        if (buttonPressed.hasAttribute('id')) {

          let clone = parent.cloneNode(true);
          let i = Number(clone.id.charAt(clone.id.length - 1)) + 1;
          clone.querySelector('input').setAttribute('id', 'firstname' + i);
          clone.setAttribute('id', 'toClone' + i);
          clone.querySelector('label').setAttribute('for', 'firstname2' + i);
          clone.querySelector('.btn').setAttribute('id', i);
          i++;
          return parent.after(clone);
        }

      })
    }
  }

  // Create an observer instance linked to the callback function
  let observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

}

*/



// Exercice 4 : 
//Demander à l'aide d'un formulaire les 5 dernières notes d'un élève.
//Calculer sa average et l'afficher à l'écran avec une appréciation.

if (document.location.href == 'http://localhost/COURS/La_Manu/_JS/JS2/Exo4.html') {

  let inputs = document.querySelectorAll('.noteInput');
  let hideMessage = document.querySelector('.message');
  let invalidMessage = document.querySelector('.invalidMessage');
  hideMessage.classList.add('hide');
  invalidMessage.classList.add('hide');

// input verification

  for (let input of inputs) {

    let verifyInput = (input) => {
      if (input.value == '') {  //non vide
        input.className = 'form-control noteInput is-invalid';

      } else if (/^(2[0]|1[0-9]|[0-9])$/.test(input.value) !== true) { //bien un nombre à 2 chiffres  !!!!!!!!!!inclure virgule et max 20
        input.className = 'form-control noteInput is-invalid';
      } else {
        input.className = 'form-control noteInput is-valid';

      }
    }

    input.addEventListener('change', () => {
      verifyInput(input);

    })
  }

// form verification

  let validBtn = document.querySelector('#validBtn');

  validBtn.addEventListener('click', () => {

    let test = document.querySelector('.is-invalid');
    let validArray = document.querySelectorAll('.is-valid');
    console.log(validArray.length);
    if (test !== null) { //verifi s'il y a des input invalid
      invalidMessage.classList.remove('hide');
      invalidMessage.innerHTML = 'Formnulaire invalide, veuillez verifier vos saisies';

    } else if (test == null && validArray.length < 5){
      invalidMessage.classList.remove('hide');
      invalidMessage.innerHTML = 'Formulaire invalide, veuillez remplir tous les champs';
    
    } else {

      invalidMessage.classList.contains('hide')? '': invalidMessage.classList.add('hide');
      let array = new Array();
      //create new array with values of input
      for (let i = 0; i < inputs.length; i++) {
        array = array.concat(Number(inputs[i].value));

      }
      // sum of the elements of array
      const sum = array.reduce((accumulator, value) => {
        return accumulator += value;
      }, 0);

      // average = sum/5
      let average = sum / 5;

      hideMessage.classList.remove('hide');

      if (0 <= average && average < 10) {
        hideMessage.innerHTML = 'Votre moyenne est de ' + average + ' /20 Vous pouvez faire mieux !';

      } else if (10 <= average && average < 15) {
        hideMessage.innerHTML = 'Votre moyenne est de ' + average + ' /20 Vos notes sont en bonne voie, tous nos Compliments!';

      } else if (15 <= average && average < 20) {
        hideMessage.innerHTML = 'Votre moyenne est de ' + average + ' /20 Vos notes sont excélentes, continuez ainsi, Bravo !';

      } else {
        hideMessage.innerHTML = 'Votre moyenne est de ' + average + ' /20 Vous avez 20, c\'est parfait, Félicitations!';
      }


    }


  })


}


//Exercice 5 : reate infinite scroll wall with https://picsum.photos/200/300

if (document.location.href == 'http://localhost/COURS/La_Manu/_JS/JS2/Exo5.html') {

let listImg = document.querySelector('#infinite-img');

// Add 20 items.
let nextItem = 1;
let loadMore = function() {
  for (let i = 0; i < 50; i++) {
    let item = document.createElement('img');
    item.setAttribute('src', 'https://picsum.photos/215/300');
    item.setAttribute('alt', 'photo');
    listImg.appendChild(item);
  }
}

// Detect when scrolled to bottom.
window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    loadMore();
  }
});

// Initially load some items.
loadMore()
}