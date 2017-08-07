      function convertCurrency(amount){
        const converted = {
          USA: amount*0.65,
          AUD: amount*0.72,
          GPB: amount*0.81,
          MEX: amount*0.50
        };
        return converted;
      }

      const currency = convertCurrency(100);
      // console.log(currency.USA);
      // console.log(currency.AUD);
      // console.log(currency.GPB);
      // console.log(currency.MEX);
      const {USA,AUD,GPB,MEX} = currency; //or const {USA,AUD,GPB,MEX} = convertCurrency(100);
      console.log(USA,AUD,GPB,MEX);

      //renaming
      const {USA:u,AUD:a,GPB:g,MEX:m} = convertCurrency(100);
      console.log(u,a);

      function tipCalc({total=100, tip=0.13, tax = 0.15} ={}){
     /* In the above line declaring the default object value to empty object,
     this helps when we wont pass any value while calling */
        return total +(total*tip)+(total*tax);
      }

      const bill = tipCalc({total:200}); // we have to pass the as object e.g., {total:200, tip:0.25}
      // In the above If we wont pass any value it take the default values or else goes for empty object
      console.log(bill);
