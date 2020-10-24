function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addClass() {
    var brand = document.getElementById("brand").value;

    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');

    removeAllChildNodes(document.getElementById('class'));
    removeAllChildNodes(document.getElementById('model'));


    option1.className, option2.className, option3.className = 'class form-control';
    option1.name, option2.name, option3.name='class';

    if(brand == "volkswagen"){
        option1.innerHTML =`<option value='none'></option>`;
        document.getElementById('class').appendChild(option1);

        option2.innerHTML =`<option value='passat'>Passat</option>`;
        document.getElementById('class').appendChild(option2);

        option3.innerHTML =`<option value='golf'>Golf</option>`;
        document.getElementById('class').appendChild(option3);
    }

    if(brand == "opel"){
        option1.innerHTML =`<option value='none'></option>`;
        document.getElementById('class').appendChild(option1);

        option2.innerHTML =`<option value='insignia'>Insignia</option>`;
        document.getElementById('class').appendChild(option2);
        
        option3.innerHTML =`<option value='astra'>Astra</option>`;
        document.getElementById('class').appendChild(option3);
    }
}

function addModel() {
    var classe = document.getElementById("class").value;

    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');

    removeAllChildNodes(document.getElementById('model'));

    option1.className, option2.className, option3.className = 'model form-control';
    option1.name, option2.name, option3.name='model';

    if(classe == "Passat"){
        option1.innerHTML =`<option value='none'></option>`;
        document.getElementById('model').appendChild(option1);

        option2.innerHTML =`<option value='passat6'>Passat 1.6</option>`;
        document.getElementById('model').appendChild(option2);

        option3.innerHTML =`<option value='passat9'>Passat 1.9</option>`;
        document.getElementById('model').appendChild(option3);
    }

    if(classe == "Golf"){
        option1.innerHTML =`<option value='none'></option>`;
        document.getElementById('model').appendChild(option1);

        option2.innerHTML =`<option value='golf4'>Golf 1.4</option>`;
        document.getElementById('model').appendChild(option2);
        
        option3.innerHTML =`<option value='golf6'>Golf 1.6</option>`;
        document.getElementById('model').appendChild(option3);
    }

    if(classe == "Insignia"){
        option1.innerHTML =`<option value='none'></option>`;
        document.getElementById('model').appendChild(option1);

        option2.innerHTML =`<option value='insignia6'>Insignia 1.6</option>`;
        document.getElementById('model').appendChild(option2);

        option3.innerHTML =`<option value='insignia9'>Insignia 1.9</option>`;
        document.getElementById('model').appendChild(option3);
    }

    if(classe == "Astra"){
        option1.innerHTML =`<option value='none'></option>`;
        document.getElementById('model').appendChild(option1);

        option2.innerHTML =`<option value='astra4'>Astra 1.4</option>`;
        document.getElementById('model').appendChild(option2);
        
        option3.innerHTML =`<option value='astra6'>Astra 1.6</option>`;
        document.getElementById('model').appendChild(option3);
    }
}

function show(){
    var yes= document.getElementById("yes");
    var no= document.getElementById("no");

    if(yes.checked){
        document.getElementById("hid").style.display='block';
    }

    if(no.checked){
        document.getElementById("hid").style.display='none';
    }
}

function addTextarea(){
    var other= document.getElementById("other");
    if (other.checked){
        document.getElementById("txtarea").style.display='block';
    }
    if (!other.checked){
        document.getElementById("txtarea").style.display='none';
    }
}

function validateAge(){
    var age = document.getElementById("age").value;
    var dateofbirth = document.getElementById("dateofbirth").value;
    var today = new Date();
    const message = document.createElement('div');

    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDay = today.getDate();

    var arrayBirth = dateofbirth.split("-");
    var birthYear = arrayBirth[0];
    var birthMonth = arrayBirth[1];
    var birthDay = arrayBirth[2];

    var days = ((todayYear - birthYear) * 365) + (Math.abs(todayMonth - birthMonth) * 30) + Math.abs(todayDay - birthDay);
    var years = Math.floor(days / 365);

    if(age == years){
        document.getElementById("subbtn").disabled = false;


        return true;
    } else{
        return false;
    }
}