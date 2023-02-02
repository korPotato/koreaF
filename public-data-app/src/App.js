import React, {useState, useEffect} from 'react';

function fetchDate() {

  const promise = fetch(`https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=L%2Fvhxk2Pa4LqA8NKubHtPZAq6zzaytKS3ne6aPFZV9w1LWkBqjMiQgkVPH6d3p6CcnQbmI%2FMq2AUIIViCvKOAA%3D%3D&searchYearCd=2021&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1`)
    .then(res => {
      if(!res.ok) {
        throw res;
      }
      return res.json()
    })
    
    return promise;
}

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData]= useState(null);

  console.log(data)

  useEffect(() => {
    fetchDate()
      .then(data => {
        setData(data)
      }) 
      .catch(error => {
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  // 가져오는 동안 유저에게 보일 화면
  if (error) {
    return <p>failed to fetch</p>
  }
  if(!isLoaded) {
    return <p>fetching data...</p>
  }
  return <h1>lol</h1>
}