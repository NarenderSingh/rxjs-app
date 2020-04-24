function print(val) {
  let el = document.createElement("p");
  el.innerText = val;
  document.body.appendChild(el);
}

const observable = Rx.Observable.create((observer) => {
  observer.next("hello");
  observer.next("world");
});

//observable.subscribe((val) => print(val));

const click = Rx.Observable.fromEvent(document, "click");
//click.subscribe((val) => console.log(val));

// promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved!");
  }, 1000);
});
const obsPromise = Rx.Observable.fromPromise(promise);
//obsPromise.subscribe((result) => print(result));

// timer
const timer = Rx.Observable.timer(1000);
//timer.subscribe(() => console.log("ding!"));

// interval
const timerInterval = Rx.Observable.interval(1000);
//timerInterval.subscribe(() => console.log(new Date().getSeconds()));

// Can emit any type of data
const mashup = Rx.Observable.of("anything", ["you", "want"], 23, true, {
  cool: "stuff",
});
//mashup.subscribe((val) => console.log(val));

// cold Observable
const cold = Rx.Observable.create((observer) => {
  observer.next(Math.random());
});

//cold.subscribe((a) => console.log("Subscriber A", a));
//cold.subscribe((b) => console.log("Subscriber B", b));

// hot Observable
const random = Math.random();
const hot = Rx.Observable.create((observer) => {
  observer.next(random);
});

//hot.subscribe((a) => console.log("Subscriber A", a));
//hot.subscribe((b) => console.log("Subscriber B", b));
