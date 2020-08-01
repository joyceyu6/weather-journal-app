/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/*CHAINED PROMISES TO GET AND POST DATA*/
document.getElementById('generate').addEventListener('click', performAction);

function performAction(){
//select the actual value of an HTML input to include in POST  
  const feelings =  document.getElementById('feelings').value;
  const zip = document.getElementById('zip').value;
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=3e402c77664060336d9eda89444507b7`;

    fetch(baseURL)   
        .then(res => {
            return res.json()
        })        
        .then(function(data){
            //Add data
            console.log(data)    
            postData('/addWeather',{feelings:feelings, temp:data.main.temp, date:newDate})


    updateUI()
})

}

/*POST EXAMPLE*/
const postData = async (url = '', data={})=>{
    console.log(data)
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },   
    body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    }catch(error) {
    console.log("error",error);
    //appropriately handle the error
    }
}

const getWeather = async(url)=>{
    const res = await fetch(url)
    try{

        const data = await res.json();
        console.log(data)
        return data;
    } catch(error){
        console.log('error',error);
        //appropriately handle the error
    }
}

/*UPDATE UI DEMO*/
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData);
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].feelings;
    }catch(error){
        console.log("error",error)
    }
}
