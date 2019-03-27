const outEl = document.querySelector("#output");
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
  //console.log(business.orders)
  let bigSpenders = true
  business.orders.forEach(order => {
    if (order > 9000) {
      bigSpenders = true
    }
  })

  return bigSpenders
})

console.log(bigSpenders)

bigSpenders.forEach(business => {
  outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
    <section>
      ${business.addressStateCode}${business.addressZipCode}
    </section>
  `
  outEl.innerHTML += "<hr/>"
});
