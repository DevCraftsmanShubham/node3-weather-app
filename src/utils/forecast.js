
const request = require('request')


const forecast = (latitude,longitude, callback) => {
    const url =  `http://api.weatherstack.com/current?access_key=dd6a6b1c8f8ab42eec3cea733585319b&query=${latitude},${longitude}&units=m`;
    
    request({url,json:true},(error,{body}) => {
            
        if(error) {
           callback('Unable to connect to weather service', undefined)
        }else if (body.error) {
            callback('Unable to find location', undefined)
        } 
        else {
            callback(undefined,`It is currenty ${body.current.temperature} degree out. There is ${body.current.precip}% chance of rain`)
          // console.log(`${response.body.current.weather_descriptions[0]}. It is currenty ${response.body.current.temperature} degree and it feels like ${response.body.current.feelslike}`)
         // console.log(`It is currenty ${response.body.current.temperature} degree out. There is ${response.body.current.precip}% chance of rain`)
        }
        
    })
    
}

module.exports = forecast