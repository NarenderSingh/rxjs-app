// map
const numbers = Rx.Observable.of(10, 100, 1000);
//numbers.map((num) => Math.log(num)).subscribe((x) => console.log(x));

// map
const jsonString = '{"tpye": "Dog", "breed": "Pug"}';
const apiCall = Rx.Observable.of(jsonString);
//apiCall.map((json) => JSON.parse(json)).subscribe((x) => console.log(x));

// do - allow us to execute code without affecting the underlying Observable
const names = Rx.Observable.of("narender", "singh");
const sub = names
  .do((name) => console.log(name))
  .delay(1000)
  .map((name) => name.toUpperCase())
  .delay(1000)
  .do((name) => console.log(name))
  .delay(1000)
  .map((name) => name.toLowerCase())
  .delay(1000)
  .do((name) => console.log(name));

//sub.subscribe();

// filter - allow us to filter
const _numbers = Rx.Observable.of(-2, 3, 4, 5, 6, -9, -5);
_numbers.filter((number) => number > 0);
//.subscribe((number) => console.log(number));

// first
_numbers.first((number) => number > 3);
//.subscribe((number) => console.log(number));

// last
_numbers.last((number) => number > 3);
//.subscribe((number) => console.log(number));

// throttle & debounce
// throttleTime : to get first event and wait for throttletime and start the second event and so on.
const events = Rx.Observable.fromEvent(document, "mousemove");
events.throttleTime(3000);
//.subscribe((event) => console.log(event));

// debounceTime : to get the last event after the debounce time
events.debounceTime(3000).subscribe((event) => console.log(event));
