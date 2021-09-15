let animationSpeed = "300"
let contentAnimationType = "fade-up"
let headingAnimationType = "fade-right"

cards = document.getElementsByClassName('card')
headers = document.getElementsByClassName('header')
projects = document.getElementsByClassName('column')
summary = document.getElementsByClassName('summary')
workexp = document.getElementsByClassName('workexplist')
socials = document.getElementsByClassName('socials')
navbar = document.getElementsByTagName('nav')

elements = [...cards, ...projects, ...summary, ...workexp, ...socials, ...navbar]
Array.from(elements).forEach(element => {
    element.setAttribute("data-aos", contentAnimationType)
    element.setAttribute("data-aos-duration", animationSpeed)
})

Array.from(headers).forEach(element => {
    element.setAttribute("data-aos", headingAnimationType)
    element.setAttribute("data-aos-duration", animationSpeed)
})

AOS.init()