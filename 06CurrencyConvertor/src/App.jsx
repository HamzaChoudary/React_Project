import { useState, useEffect, useCallback } from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState( () => "usd")
  const [to, setTo] = useState( () => "pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyinfo(from)

  const options =  Object.keys(CurrencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
const convert = () => {
  setConvertedAmount(amount * CurrencyInfo[to])
}  
// // set up form default values
// const reset = useCallback(() =>{
//    let valueone = "usd"
//     let valuetwo = "pkr"
//   });

//   // fill in default values on load
//   useEffect(() => {
//     reset(setdefaultValue)
//   }, [setTo, setFrom]); 

  return (
      <div
          className="w-full object-right h-screen flex flex-d-row  justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2024/08/01/10/18/bird-8936789_640.jpg')`
          }}
      >
                <div>
                <img className="object-none object-left bg-yellow-300 mx-40 w-35 h-30 rounded-lg shadow-md " src="https://cdn.pixabay.com/photo/2019/10/17/10/31/chai-4556591_640.jpg" />
                </div>
          <div className="w-full">
              <div className="w-full object-none object-right max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                            //   defaultValues={valueone}
                              amount={amount}
                              currencyOptions={options }
                              onCurrencyChange={(currency) => setAmount(currency)} 
                              selectCurrency={from}
                              onAmountChange={(amount) => setAmount(amount)}
                             
                            
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                            //   defaultValues={valuetwo}
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)} 
                              selectCurrency={from}
                            //   setdefaultValue={to}
                              amountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )};

export default App
