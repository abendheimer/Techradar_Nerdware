const fetchJSON = async function(url)
{
  const response = await fetch(url)
  const result = await response.json()
  return result
}




module.exports= fetchJSON
