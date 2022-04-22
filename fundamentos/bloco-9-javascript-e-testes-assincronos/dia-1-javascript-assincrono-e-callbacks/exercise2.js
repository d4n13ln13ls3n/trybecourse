const messageDelay = () => Math.floor(Math.random() * 5000);
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () =>{
  setTimeout(() => {
    console.log(`Mars temperature is: ${getMarsTemperature()} degrees Celsius`);
  }
  ,messageDelay());
}
sendMarsTemperature();


const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
const handleError = (errorReason) =>
console.log(`Error getting temperature: ${errorReason}`);


const sendMarsTemperature2 = (onSuccess, onFailure) => {
  const didOperationSucceed = Math.random() >= 0.6;
    if(didOperationSucceed) {
      const temperature = getMarsTemperature();
  onSuccess(temperature);
} else {
  const errorReason = 'Robot is busy';
  onFailure(errorReason)
  }
}

// sendMarsTemperature2(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature2(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
sendMarsTemperature2(temperatureInFahrenheit, handleError);
//  imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature2(greet, handleError);
