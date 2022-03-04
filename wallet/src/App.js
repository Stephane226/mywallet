import logo from './logo.svg';
import './App.css';
import {Header} from './components/header.js';
import {Balance} from './components/balance.js';  
import TransactionList from './components/transactionList'; 
import IncomeExpensive from './components/incomeExpensive.js'; 
import  AddTransaction from './components/addTransaction';  
 
function App() {
  return (
    <div>
     <Header/>
     <div className="container">
     <Balance/>
     <IncomeExpensive/>
     <TransactionList/>
     <AddTransaction/>
    </div>
   
    </div>
  );
}

export default App;
