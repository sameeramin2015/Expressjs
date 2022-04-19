const express = require ('express') // import the packegs
const app = express (); // create new variable
const bodyParser = require('body-parser') //middleware - for control the data and request 
const cors = require ('cors') // middleware
const cheerio = require ('cheerio') // is package used in expressjs for fetching api
const axios = require('axios').default

//https://www.bbc.com/news

app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res)=>{ // fuction 
    axios.get('https://www.bbc.com/news') // get data from the website
    .then(hlnRes =>hlnRes.data)
    .then(data=>{
        console.log(data)
        const $ = cheerio.load(data)
        const getAllNews = $('.gs-c-promo.nw-c-promo')
        let collectData = []
        const linkandTitle = getAllNews.find('a')
        console.log(linkandTitle.attr('href'))
        //console.log(linkandTitle.text())
      
        const getImage = getAllNews.find('.gs-c-promo-image').first().first().find('img')
        console.log(getImage.attr('src'))

        let obj ={
            title: linkandTitle.text(),
            image: getImage.attr('src')

        }

        res.json(obj)
     
        
    })
    

})

app.listen(4000, ()=>{
    console.log('server is running ....')
})
