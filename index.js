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

// convert cold to hot obserbables
const coldOne = Rx.Observable.create((observer) => {
  observer.next(Math.random());
});
const hotOne = coldOne.publish();
hotOne.subscribe((a) => console.log("Subscriber A", a));
hotOne.subscribe((b) => console.log("Subscriber B", b));
//hotOne.connect();

// completion
const timerOne = Rx.Observable.timer(1000);
timerOne.finally(() => console.log("done"));
//.subscribe((val) => console.log(val));

// completion manually
const intervalOne = Rx.Observable.interval(1000).finally(() =>
  console.log("All done!")
);
const subscriptionInt = intervalOne.subscribe((val) => console.log(val));
window.setTimeout(() => subscriptionInt.unsubscribe(), 5000);
