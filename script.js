async function convertyCurrency(amount, from, to) {
  const api_key = 'cur_live_wCHPDG302PSWzLTGr8sRcvkPLXPjM5sd8aoUCvVx'  
  const url = `https://api.currencyapi.com/v3/latest?apikey=${api_key}&base_currency=${from}`
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const rate = data.data[to].value
  return (amount * rate).toFixed(2);
}

convertyCurrency(100, "USD", "UZS").then(result => {
    console.log('100 usd = ' + 'uzs');
    
}) 


function ImRegion(item) {
    for (const Key in item) {
      let nimadan = document.getElementById('nimadan')
      let nimaga = document.getElementById('nimaga')

      let flag_code = key.slice(0, -1).toLowerCase()

      let img = `https://flagcdn.com/24x18/${flag_code}.png`
      let liNmadan = document.createElement('li')
      liNmadan.innerHTML = `
      <img src="${img}" alt="" />
      ${key}
      `
      nimadan.append(liNmadan)
      console.log(img);

    }
}