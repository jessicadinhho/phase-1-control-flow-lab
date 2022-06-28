function scuberGreetingForFeet(someValue){
  let freeSample, thirtyBucks, tooLong
  if (someValue <= 400) {
    freeSample = "This one is on me!"
    return freeSample
  }
  else if (someValue > 400 && someValue <=2000){
    return 'That will be twenty bucks.'
  }
  else if (someValue > 2000 && someValue < 2500) {
    thirtyBucks = "I will gladly take your thirty bucks."
    return thirtyBucks}

  else if (someValue > 2500) {
    tooLong = "No can do."
    return tooLong};
  }
  // Write your code here!


function ternaryCheckCity(city){
  // Write your code here!
  let NYC = "NYC";
  return (city === NYC ? "Ok, sounds good." : "No go." )

}

function switchOnCharmFromTip(tip){
  let reply;
  switch (tip) {
    case 'generous':
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.';
      break;
    default:
      reply = 'Bye.';
      break;}
  return reply;
  }
  // Write your code here!