// 1. Callback hell

const order = ["shoes", "pens"]

const orderId = createOrder(order, proceedToPayment)
// ..
// ..
proceedToPayment(orderId, proceedToSummary)
// ..
// ..

// if you observe, we are passing functions as args to functions, which will be called eventually
// Two disadvantages -> 1. Pyramid or doom 2. Inversion of control
// (we are trusting createOrder funtion to call proceedToPayment)

// 2. Promises
const gitInfo = "https://api.github.com/users/rohitbrk"
const userPromise = fetch(gitInfo)

userPromise
.then((data)=>data.json())
.then(data=>new Promise((res, rej)=> res(data.name))
.then(data=>console.log(data))

// this works like gem, because we solved the two problems with callback hell.
// note - funtions can return promise. Primse is like a placeholder, which gets resoled in future.
// promise can have only three states -> pending, fulfilled, rejected
// then funtion on the promise will only run once and only after the promise gets resolved.
// if there are mutiple then functions, then the returned data from one then will be passed to the next then.

// 3. async - await (this is syntactic sugar to promises)
const fetchUser = async (GIT_URL) => {
  const response = await fetch(GIT_URL)
  const data = await response.json()
  console.log(data)
}

fetchUser(gitInfo)
