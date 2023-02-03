import axios from 'axios';
const u ="http://localhost:3030"


export const postman=(req,url,body)=>{
  return new Promise((resolve ,reject)=>{
    let token =localStorage.getItem("login")
   let headers;
    if(token==null)
    {
      headers= {}
    }
    else
    {
       headers={
        'authorizaton':token,
        'Content-Type': 'application/json'
        
      }
    }
    var config = {
      method: req,
      url: u+url,
      headers:headers,
      data : body
    };
    axios(config)
      .then(function (response) {
      resolve(response)
      })
      .catch(function (error) {
        reject(error)
      });
  })

}

