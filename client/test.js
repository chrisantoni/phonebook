function formatprice(price){
  price = price.toString()
  let temprice = ''
  let finalFormat = ''
  let count = 0
  let len = price.length

  for(i=len-1;i>=0;i--){
    if(count%3 === 0 && i < len-1)temprice += '.'
    temprice += price[i]
    count++
  }

  temprice = temprice.split('').reverse().toString().replace(/,/g,'')
  finalFormat = 'Rp.'+temprice+',-'

  return finalFormat
}

console.log(formatprice(30000000));
