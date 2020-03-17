let raceNumber = Math.floor(Math.random() * 1000);

/* math random will asign 0 and 1 beetwen a number math.floor convert from decimal to integer*/

const registeredEarly = true;

const age = 19;

if (registeredEarly && age > 18) {

  raceNumber += 1000 ;
  console.log (`Race will began 9:30 am your race number ${raceNumber}`)

} else if ( !registeredEarly && age > 18 ) {

  console.log(` Race will began 11.00 your race number ${raceNumber} `)

} else if (age < 18 ) {
  console.log(`race will began 12:30 your race number ${raceNumber}`)
} else {
  console.log('you are the bitches')
}
