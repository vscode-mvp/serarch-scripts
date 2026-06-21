async function getApi() {
  try {
  const response = await fetch()
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
    console.log( DATA[param1], DATA[param2] )
    return [ DATA[param1], DATA[param2] ]
  }
  if (param1 && param1 in DATA) {
    console.log(DATA[param1])
    return DATA[param1]
  }
  else {
    console.log('ПАРАМЕТРЫ УКАЗАНЫ НЕВЕРНО')
  }
}
const currentData = await getApi()
searchOnParams(currentData, 'id')
