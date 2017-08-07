  //Till now there are 6 primitive data types-Number, String, Object, Boolean, Null, Undefined
  //Now the 7th primitve data type is Symbol
  const kk = Symbol('kumar');
  const ks = Symbol('kumar');
  console.log(kk,ks);

  const classRoom = {
    [Symbol('oliva')] : {grade:50, gender:'mail'},
    [Symbol('mark`')] : {grade:50, gender:'mail'},
    [Symbol('mark')] : {grade:50, gender:'mail'}
  };

  /*for (person in classRoom){
    console.log(person);
  } */
  //Since the symbol is innumerbale we can't apply for in loop
  // console.log(classRoom);

  const syms = Object.getOwnPropertySymbols(classRoom);
  const data = syms.map(sym => classRoom[sym]);
  console.log(data);
