  //THIS IS FUNCTION IS WRITTEN TO GET HOLD ON THE STRING
  function highlight(strings, ...values){
    let str = '';
    strings.forEach((string,i) =>{
      // str += string + (values[i] || '');
      //other way of writing the above statement
      str += `${string} <span class="hl">${(values[i] || '')}</span>`
    });
   return str;
  }
  //------------------------------------------------------------------------------
    const name = 'mallanna';
    const age = 100;

    const sentence = highlight`My name is ${name} and my age is ${age} `;
    console.log(sentence);
    //Adding CSS Styles
    const styling = document.createElement('style');
    styling.innerHTML = '.hl{background-color: red ;}';
    document.head.appendChild(styling);
    document.body.innerHTML = sentence;
