// programm server sytem iig programmist huntei holboj baigaag API gene
// API- tusgailan beldsen datag avahin tuld holboj uguh hergsel 

//fetch('url)' -> api ruu request yvuulna
// promise -> bi huselt yvuulbal nadad hariu irne gsen amlalt 
// .then() -> promise
// .json() -> zambraagui file-iig hvnii nvdend hylbar bogoj gargaj irne


// fetch('https://fakestoreapi.com/products').then(
    //     response => response.json()
    // ).then
    //     product => {
    //         console.log(product);
    //         console.log(product[product.length-1].rating.rate);
    //     }
    // ) 
    
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=ulaanbaatar&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd&fbclid=IwAR0i2J7FInqXsH03Rda-955_nrzqXW5uT3S5SDVTIdhkFidcJjneldbO-8U').then(
    //         response => response.json()
    // ).then(
    //     data => {
    //         console.log(data);
    //         console.log(data.main.temp);
    //         console.log(data.name);
    //         console.log(data.weather[0].description);
    //         console.log(data.wind.speed);
    //     }
    // )

    let input = document.getElementsByTagName('input')[0];
    let searchbtn = document.querySelector('.search');
    let country = document.querySelector('.country') ;
    let speed = document.querySelector('.speed');
    let temp = document.querySelector('.temp');
    let description = document.querySelector('.description');
    
    searchbtn.addEventListener('click', () => { 
        let city = input.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd&fbclid=IwAR0i2J7FInqXsH03Rda-955_nrzqXW5uT3S5SDVTIdhkFidcJjneldbO-8U`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.name);
            console.log(data.weather[0].description);
            console.log(data.wind.speed);
            country.innerText = "Country : " + data.name;
            speed.innerText = "Speed : " + data.wind.speed;
            temp.innerText = "Temperature : " + data.main.temp;
            description.innerText = "Description : " + data.weather[0].description;
    
            // icon кодыг ашиглан цаг агаарын дүрсийн icon-г үүсгэ
            let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
            // Цаг агаарын icon img элемент үүсгэнэ үү
            let iconImg = document.createElement('img');
            iconImg.src = iconUrl;
            iconImg.alt = "Weather Icon";
            iconImg.classList.add("weather-icon"); 
    
            // Тайлбарын доор дүрс дүрсийг хавсаргана уу
            description.appendChild(iconImg);
        })
        .catch(error => console.log('Error:', error));
    });
    