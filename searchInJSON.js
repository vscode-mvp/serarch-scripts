async function getApi(url) {
  try {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error()
  }
  const data = await response.json()
  return data
  }
  catch (error) {
    console.error(error)
  }
}
function searchOnParams(DATA, param1, param2) {
  if (param1 && param2 && param1 in DATA && param2 in DATA) {
    console.log( `${param1}: ${DATA[param1]}, ${param2}: ${DATA[param2]}` )
    return [ DATA[param1], DATA[param2] ]
  }
  if (param1 && param1 in DATA) {
    console.log(`${param1}: ${DATA[param1]}`)
    return DATA[param1]
  }
  else {
    console.log('ПАРАМЕТРЫ УКАЗАНЫ НЕВЕРНО')
  }
}
const currentData = await getApi('your-url')
searchOnParams(currentData, 'param1', 'param2')
