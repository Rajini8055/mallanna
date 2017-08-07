      const course = 'RFB2';
      const flightNumber = '20-AC2018-jz';
      const accountNumber = '8026445RT0001';

      const make = 'BMW';
      const colour = 'Royal Blue';
      const model = 'X6';

      function leftPad(str,length=20){ //here declaring the default length
        return `-> ${' '.repeat(length-str.length)}${str}`;
      }

      console.log(leftPad(make))
      console.log(leftPad(colour))
      console.log(leftPad(model))
