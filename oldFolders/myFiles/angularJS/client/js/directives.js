      angular.module('myApp')
            .directive('formDisplay',function(){
                return {
                  templateUrl:'directives/form.html'
                }
              })
             .directive('searchResult', function(){
               return {
                 restrict : 'AECM', //restricted for attribute, element, class, comment
                 templateUrl: 'directives/searchResult.html',
                 replace: true,
                 scope:{
                   /** when we need to access in single way binding i.e., individually**
                   //personName : '@', /*keyside: write our normalized attribute else--if you want own attribute
                                                personNameVar : "@personName"-->atlast it matches parent scope key name
                                      value side: which type you want to access "@"=>represents text, */
                  //personAddress : '@'

                  /**when we need to access as a object **/
                  personObject : '=' ,   //here '=' tells us it's two way binding object
                  formattedAddressFunction : '&'
                },
                transclude:true
                //  link: function(scope,elements, attrs){
                //    if(scope.personObject.name =='Kumar'){
                //      elements.removeAttr('class');
                //    }
                //  }
               }
             })
             ;
