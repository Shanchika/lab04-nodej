const myPromise = Promise.resolve('Async Success!');

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();