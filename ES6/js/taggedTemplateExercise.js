  const dict = {
    HTML: 'This is about HTML tag',
    CSS:  'This is about the CSS',
    JS: 'This is about the JS file'
  };

  function addAbbrevation(strings, ...values){
    const abbreviated = values.map(value =>{
      if(dict[value]){
        return `<abbr title='${dict[value]}'>${value}</abbr>`
      }
      return value;
    });

    return strings.reduce((sentence, string, i)=>{
      return `${sentence}${string}${abbreviated[i] || ''}`
    }, '');
  }

  const first = 'kumar';
  const last =  'swamy';

  const sentence = addAbbrevation`Hello my name is ${first} ${last} and I love to code on ${'HTML'},
  ${'CSS'}, ${'JS'}`;
  const bio = document.querySelector('.bio');
  const p = document.createElement('p');
  p.innerHTML = sentence;
  bio.appendChild(p);
  console.log(sentence);
