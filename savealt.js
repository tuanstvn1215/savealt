try {
  setTimeout(() => {}, timeout);
} catch (error) {}
const b = async () => {
  await a();
};
const wait = async (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const a = async () => {
  console.log("sdfsdfsd");
  await wait(5000);
  const d = document.querySelector("section > div > div:nth-child(1) > div > div");
  console.log(d);
  d.click();
  await wait(5000);
  const buttonsColection = document.getElementsByTagName("button");
  const buttonsArray = Array.from(buttonsColection);
  buttonsArray.forEach((button) => {
    if (button.innerText == "Generate") button.click();
  });
  await wait(300000);
  document.location.replace("https://robloxaltgen.com/dashboard?tab=accounts");
};
a();
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
