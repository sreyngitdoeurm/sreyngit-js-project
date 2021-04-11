
// ------------------------------------add event listener on get input button-----------------------------
let button1=document.querySelector('#button-1');
button1.addEventListener('click', function(event){
    event.preventDefault();
    // create form element----------------------------
    let form=document.createElement('form');

    // create text with h3--------
    let h3=document.createElement('h3');
    h3.textContent='Please input your detail';

    // add h3 to form---------
    form.appendChild(h3);
    // cteate div2 with class name's form------------
    let secondChild=document.createElement('div');
    secondChild.className='form';

    // create an input element for first name-------
    let firstName=document.createElement('input');
    firstName.setAttribute('type', 'text');
    firstName.setAttribute('name', 'firstName');
    firstName.setAttribute('placeholder', 'First Name')
    firstName.className='box';
    // create an input element for last name------
    let lastName=document.createElement('input');
    lastName.setAttribute('type', 'text');
    lastName.setAttribute('name', 'lastName');
    lastName.setAttribute('placeholder','Last Name');
    lastName.className='box';

    // create an input element for email
    let email=document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('name','email');
    email.setAttribute('placeholder','Email');
    email.className='box';

    // create an input element for country
    let country=document.createElement('input');
    country.setAttribute('type', 'text');
    country.setAttribute('name','country');
    country.setAttribute('placeholder','Country');
    country.className='box';

    // create an input element for city
    let city=document.createElement('input');
    city.setAttribute('type', 'text');
    city.setAttribute('name','city');
    city.setAttribute('placeholder','City')
    city.className='box';

     // create an input element for date
     let date=document.createElement('input');
     date.setAttribute('type', 'date');
     date.setAttribute('name','date');
     date.className='box';
     

     // create an input element for validation
     let validation=document.createElement('input');
     validation.setAttribute('type', 'date');
     validation.setAttribute('name','city');
     validation.className='box';
     
      // create an input element for price
    let price=document.createElement('input');
    price.setAttribute('type', 'number');
    price.setAttribute('name','price');
    price.setAttribute('placeholder','Prices')
    price.className='box';

    // -------------create a button element for submit----------
    let btnSubmit=document.createElement('button');
    btnSubmit.setAttribute('type','submit');
    btnSubmit.setAttribute('id', 'btnsubmit');
    btnSubmit.textContent='Submit';

    // -----------create a button element for update------------
    let btnUpdate=document.createElement('button');
    btnUpdate.setAttribute('type','submit');
    btnUpdate.setAttribute('id', 'btnupdate');
    btnUpdate.textContent='Update';

    // -------------------add all inputs element into form element---------------  
    form.appendChild(firstName)
    form.appendChild(lastName);
    form.appendChild(email);
    form.appendChild(country);
    form.appendChild(city);
    form.appendChild(date);
    form.appendChild(validation);
    form.appendChild(price);
    // add button submit and update into form-------------
    form.appendChild(btnSubmit);
    form.appendChild(btnUpdate);

    // add form to a parent-----------
    let parent=document.querySelector('.container');
    parent.appendChild(form);
    // hide get input button
    button1.style.display='none';

   

    // --------------------------------------add event listener on submit button--------------------------------------
    let btn=document.querySelector('#btnsubmit');
    btn.addEventListener('click',function(event){
      event.preventDefault();
      // create an div element with class name result
      let result=document.createElement('div');
      result.className='table';

      // -------------------create a table element----------------------------------
      let table=document.createElement('table');
      // create a first tr element 
      let firstTr=document.createElement('tr');
      // create th element of first tr element
      let th1=document.createElement('th');
      th1.textContent='First Name';
      let th2=document.createElement('th');
      th2.textContent='Last Name';
      let th3=document.createElement('th');
      th3.textContent='Email';
      let th4=document.createElement('th');
      th4.textContent='Country Name';
      let th5=document.createElement('th');
      th5.textContent='City Name';
      let th6=document.createElement('th');
      th6.textContent='Published Date';
      let th7=document.createElement('th');
      th7.textContent='Purchase Date';
      let th8=document.createElement('th');
      th8.textContent='Prices';

      // add all the th element into first tr element
      firstTr.appendChild(th1);
      firstTr.appendChild(th2);
      firstTr.appendChild(th3);
      firstTr.appendChild(th4);
      firstTr.appendChild(th5);
      firstTr.appendChild(th6);
      firstTr.appendChild(th7);
      firstTr.appendChild(th8);

      // add firstTr into div class name table
      result.appendChild(firstTr);

      // create a second tr element 
      let secondTr=document.createElement('tr');

      // ----------------------------confirm message when input nothing------------------------------
      if (firstName.value===''){
        return confirm('You must fill all the infomation');
      }else if (lastName.value==''){
        return confirm('You must fill all the infomation');
      }else if (email.value===''){
        return confirm('You must fill all the infomation');
      }else if (country.value===''){
        return confirm('You must fill all the infomation');
      }else if(city.value===''){
        return confirm('You must fill all the infomation');
      }else if (date.value===''){
        return confirm('You must fill all the infomation');
      }else if(validation.value===''){
        return confirm('You must fill all the infomation');
      }else if(price.value===''){
        return confirm('You must fill all the infomation');
      }

      // ---------------------------------------------------- date and validation ---------------
      let arrayOfdate=[];
      let numberOfdate='';
      let valueOfdate=date.value;
      for (let item of valueOfdate){
        if (! (item==='-')){
          numberOfdate+=item;
        }else{
          arrayOfdate.splice(0,0,numberOfdate);
          numberOfdate='';
        }
      }
      arrayOfdate.splice(0,0,numberOfdate);
      
      let startDate=arrayOfdate[0];
      let startMonth=arrayOfdate[1];
      let startYear=arrayOfdate[2];
      console.log(startDate,startMonth,startYear);
      // -------------------------------------
      let arrayOfvalidate=[];
      let numberOfvalidate='';
      let valueOfvalidate=validation.value;
      for (let n of valueOfvalidate){
        if (! (n==='-')){
          numberOfvalidate+=n;
        }else{
          arrayOfvalidate.splice(0,0,numberOfvalidate);
          numberOfvalidate='';
        }
      }
      arrayOfvalidate.splice(0,0,numberOfvalidate);
      


      let endDate=arrayOfvalidate[0];
      let endMonth=arrayOfvalidate[1];
      let endYear=arrayOfvalidate[2];
      if (endYear<startDate){
        return confirm('Purchase date must be after published date');
      }else if(endMonth<startMonth){
        return confirm('Purchase date must be after published date');
      }else if(endDate<startDate){
        return confirm('Purchase date must be after published date');
      }
      // -------------------------------------------------------------------------------
      // create td element of second tr element
      let td1=document.createElement('td');
      td1.textContent=firstName.value;
      let td2=document.createElement('td');
      td2.textContent=lastName.value;
      let td3=document.createElement('td');
      td3.textContent=email.value;
      let td4=document.createElement('td');
      td4.textContent=country.value;
      let td5=document.createElement('td');
      td5.textContent=city.value;
      let td6=document.createElement('td');
      td6.textContent=date.value;
      let td7=document.createElement('td');
      td7.textContent=validation.value;
      let td8=document.createElement('td');
      td8.textContent=price.value + ' $';

      // add all the td element into second tr element
      secondTr.appendChild(td1);
      secondTr.appendChild(td2);
      secondTr.appendChild(td3);
      secondTr.appendChild(td4);
      secondTr.appendChild(td5);
      secondTr.appendChild(td6);
      secondTr.appendChild(td7);
      secondTr.appendChild(td8);
      // add secondTr into div class name table
      result.appendChild(secondTr);


      // -----------------create a div element with class buttons--------
      let buttons=document.createElement('div');
      buttons.className='buttons';

      // create button delete 
      let button2=document.createElement('button');
      button2.id='button-2';
      button2.textContent='Delete';

      // create button edit
      let button3=document.createElement('button');
      button3.id='button-3';
      button3.textContent='Edit';

      // add add buttons into div class buttons
      
      buttons.appendChild(button2);
      buttons.appendChild(button3);

      // add buttons into result
      result.appendChild(buttons);

      

      // display background of result
      result.style.background='yellow';
      document.body.appendChild(result);
      

      // ---------------------------add event listener no button delete---------------------------------------
      let element=document.querySelector('.table');
      console.log(element);
      element.addEventListener('click',function(event){
        if (event.target.id==='button-2'){
          let parent=event.target.parentElement;
          let grandParent=parent.parentElement;
          grandParent.remove();
        }

      })


      //  hide form-------------------------------------
      parent.style.display='none';

      // create a button add
      let addButton=document.createElement('button');
      addButton.id='button-4';
      addButton.textContent='Add more';

      // add button add into body
      document.body.appendChild(addButton);

      // --------------------------------------------------add event listener to addButton-----------------------------------------
      addButton.addEventListener('click',function(event){
        event.preventDefault();
        // display form
        parent.style.display='block';

        // hide add button
        addButton.style.display='none';
      })
      // remove the first index of button add-----------------
      let allAdd=document.querySelectorAll('#button-4');
      if (allAdd.length>1){
        allAdd[0].remove();
      }

      firstName.value='';
      lastName.value='';
      email.value='';
      country.value='';
      city.value='';
      date.value='';
      validation.value='';
      price.value='';

      
    })
    
})
