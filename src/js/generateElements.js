import al_biology from '../media/images/al_biology.jpg'
import al_chemistry from '../media/images/al_chemistry.jpg'
import al_physics from '../media/images/al_physics.jpg'

import ol_biology from '../media/images/ol_biology.jpg'
import ol_chemistry from '../media/images/ol_chemistry.jpg'
import ol_combined from '../media/images/ol_combined.png'
import ol_economics from '../media/images/ol_economics.png'
import ol_physics from '../media/images/ol_physics.jpg'

import randomImage1 from '../media/images/Random/1.jpg'
import randomImage2 from '../media/images/Random/2.jpg'
import randomImage3 from '../media/images/Random/3.jpg'
import randomImage4 from '../media/images/Random/4.jpg'
import randomImage5 from '../media/images/Random/5.jpg'
import randomImage6 from '../media/images/Random/6.jpg'
import randomImage7 from '../media/images/Random/7.jpg'
import randomImage8 from '../media/images/Random/8.jpg'
import randomImage9 from '../media/images/Random/9.jpg'
import randomImage10 from '../media/images/Random/10.jpg'
import randomImage11 from '../media/images/Random/11.jpg'
import randomImage12 from '../media/images/Random/12.jpg'
import randomImage13 from '../media/images/Random/13.jpg'
import randomImage14 from '../media/images/Random/14.jpg'

const randomImages = { randomImage1, randomImage2, randomImage3, randomImage4, randomImage5, randomImage6, randomImage7, randomImage8, randomImage9, randomImage10, randomImage11, randomImage12, randomImage13, randomImage14 }
const images = { al_biology, al_chemistry, al_physics, ol_biology, ol_chemistry, ol_combined, ol_economics, ol_physics }

function generateSideButton(level, subject, year, session, variant) {
    const element = document.createElement('div')
    element.classList.add('side-container')
    element.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-${subject}` : `side-${level}-${subject}-${year}` : `side-${level}-${subject}-${year}-${session}` : `side-${level}-${subject}-${year}-${session}-${variant}`

    const buttonElement = document.createElement('div')
    buttonElement.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-button-${subject}` : `side-${level}-button-${subject}-${year}` : `side-${level}-button-${subject}-${year}-${session}` : `side-${level}-button-${subject}-${year}-${session}-${variant}`
    buttonElement.classList.add(`side-button`)
    buttonElement.classList.add(`side-button-${variant == undefined ? session == undefined ? year == undefined ? 'subject' : 'year' : 'session' : 'variant'}`)

    const arrowDownSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowDownSvg.classList.add('side-button-arrow'); arrowDownSvg.setAttribute('width', '32'); arrowDownSvg.setAttribute('height', '32'); arrowDownSvg.setAttribute('viewBox', '0 0 256 256'); arrowDownSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowDownSvg.innerHTML = '<path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />'
    const arrowUpSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowUpSvg.classList.add('side-button-arrow'); arrowUpSvg.classList.add('hidden'); arrowUpSvg.setAttribute('width', '32'); arrowUpSvg.setAttribute('height', '32'); arrowUpSvg.setAttribute('viewBox', '0 0 256 256'); arrowUpSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowUpSvg.innerHTML = '<path fill="currentColor"d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17" />'
    if (variant == undefined) {
        buttonElement.appendChild(arrowDownSvg)
        buttonElement.appendChild(arrowUpSvg)
    }

    const title = document.createElement('div')
    title.textContent = variant == undefined ? session == undefined ? year == undefined ? subject == 'Combined' ? 'Combined Science' : subject : year : (session == 'm' ? 'Feb / Mar' : session == 's' ? 'May / Jun' : 'Oct / Nov') : `Variant ${Number(variant) + 1}`
    title.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-${subject}-title` : `side-${level}-${subject}-${year}-title` : `side-${level}-${subject}-${year}-${session}-title` : `side-${level}-${subject}-${year}-${session}-${variant}-title`

    buttonElement.appendChild(title)

    element.appendChild(buttonElement)
    if (variant == undefined) {
        const container = document.createElement('div')
        container.classList.add('side-container')
        container.classList.add('collapsed')
        container.id = session == undefined ? year == undefined ? `side-${level}-${subject}-years-container` : `side-${level}-${subject}-${year}-sessions-container` : `side-${level}-${subject}-${year}-${session}-variants-container`

        const group = document.createElement('div')
        group.classList.add('side-group')
        group.id = session == undefined ? year == undefined ? `side-${level}-${subject}-years` : `side-${level}-${subject}-${year}-sessions` : `side-${level}-${subject}-${year}-${session}-variants`

        container.appendChild(group)

        element.appendChild(container)

        arrowDownSvg.addEventListener('click', () => {
            arrowDownSvg.classList.add('hidden')
            arrowUpSvg.classList.remove('hidden')
            container.classList.remove('collapsed')
        })

        arrowUpSvg.addEventListener('click', () => {
            arrowDownSvg.classList.remove('hidden')
            arrowUpSvg.classList.add('hidden')
            container.classList.add('collapsed')
        })
    }

    return element
}

function generateMainButton(level, subject, year, session, variant, randomImage) {
    const elementContainer = document.createElement('div')
    elementContainer.classList.add('card-container')
    elementContainer.id = variant == undefined ? session == undefined ? year == undefined ? `${level}-${subject}-card-container` : `${level}-${subject}-${year}-card-container` : `${level}-${subject}-${year}-${session}-card-container` : `${level}-${subject}-${year}-${session}-${variant}-card-container`

    const element = document.createElement('div')
    element.classList.add('card')
    element.id = variant == undefined ? session == undefined ? year == undefined ? `${level}-${subject}-card` : `${level}-${subject}-${year}-card` : `${level}-${subject}-${year}-${session}-card` : `${level}-${subject}-${year}-${session}-${variant}-card`

    const imageContainer = document.createElement('div')
    imageContainer.classList.add('image-container')
    const image = document.createElement('img')
    if (randomImage != undefined) {
        image.src = randomImages[`randomImage${randomImage + 1}`]
    } else {
        image.src = images[`${level}_${subject.toLowerCase()}`]
    }
    imageContainer.appendChild(image)
    element.appendChild(imageContainer)

    const title = document.createElement('div')
    title.textContent = variant == undefined ? session == undefined ? year == undefined ? subject == 'Combined' ? 'Combined Science' : subject : year : (session == 'm' ? 'Feb / Mar' : session == 's' ? 'May / Jun' : 'Oct / Nov') : `Variant ${Number(variant) + 1}`
    title.classList.add('card-title')
    element.appendChild(title)

    elementContainer.appendChild(element)

    return elementContainer
}

function generateRandomImages() {
    const randomImagesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    shuffle(randomImagesArray)

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    return randomImagesArray
}

export { generateSideButton, generateMainButton, generateRandomImages }