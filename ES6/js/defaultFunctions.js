      // function caluculateBill(total,tax,tip){
      //   return total + (total*tax)+(total*tip);
      // }

      function caluculateBill(total,tax = 0.25,tip = 0.13){
        return total + (total*tax)+(total*tip);
      }

      /*What if we dont pass all the parameters?
        Ans: now default values comes into picture.
        var tax= tax || 0.25;
        var tip = tip || 0.13;
        And the other way is
        directly declaring during function declaration
        function caluculateBill(total,tax=0.25,tip=0.13)
      */
      const bill = caluculateBill(100);
      console.log(bill);
