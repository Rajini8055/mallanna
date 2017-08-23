import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import { getFunName } from './helpers';
import App from './App'

class StorePicker extends React.Component {
    goToStore(event){
        event.preventDefault();
        console.log('you changed the URL');
        //first--Grab the text from the box
       const storeId = this.storeInput.value;
       console.log(`changing to this ${storeId}`)
        //second--use the value to transform from '/' to '/storeInput value'
    
        //  this.context.router.transitionTo(`/store/${storeId}`);
        this.context.router.history.push(`/store/${storeId}`);
             
    }

    render() {
        return ( 
        	<form className="store-selector" onSubmit={(e)=>this.goToStore(e)} >
        {/*Comment here*/}
        	<h3>Please Enter A Store</h3>
        	<input type="text" required placeholder="Store Name" 
            defaultValue = {getFunName()} ref={(input) => this.storeInput = input } />
            <button >Visit Store </button>
         </form>
        )

    }
}

StorePicker.contextTypes={
    router: React.PropTypes.object
}

// StorePicker.contextTypes = {
//   history: React.PropTypes.shape({
//     push: React.PropTypes.func.isRequired
//   })
// }

export default StorePicker;