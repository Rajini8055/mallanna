        const markup = `
            <div>
            <h1>This is from template string</h1>
            </div>
        `;
        console.log('markup:-'+'\n'+markup);
        document.body.innerHTML = markup;

        /*Nested Template Strings*/

        const   dogs = [
          {name:'puppy',  age:2  },
          {name:'tommy',  age:6  },
          {name: 'jimmy', age:8  }
        ];

        const dogMarkup = `
          <ul>
          ${dogs.map(dog => `<li>${dog.name} is ${dog.age*7}</li>`)
                    .join('') /* here don't use ";" at end of join, it(join) is used to
                     remove the "," b/w li elements and join them without any characters b/w them */
                }
          </ul>
        `;
        console.log('dogMarkup:-'+'\n'+dogMarkup);
        document.body.innerHTML =dogMarkup;


/**Note: when you use "document.body.innerHTML" it takes only the latest
document.body.innerHTML and overrides the previous one's

**/
//==================================================================================

//creating HTML fragments with Template literals

    const beer = {
      name: 'Belgain Wit',
      brewery: 'Steam while brewing',
      keywords: ['pale', 'cloudy','spiced','crisp']
    };

    function renderedKeywords(keywords){
        return  `
          <ul>
            ${keywords.map(key => `<li>${key}</li>`)
                      .join('')
              }
          </ul>
        `;
    }

    const beerMarkup = `
    <div class="beer">
      <h1>${beer.name}</h1>
      <p class="brewing">${beer.brewery}</p>
      ${renderedKeywords(beer.keywords)}
    </div>
      `;

    console.log('beerMarkup:-'+'\n'+beerMarkup);
    document.body.innerHTML = beerMarkup;
