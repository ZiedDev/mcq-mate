import al_biology from '../media/images/al_biology.jpg'
import al_chemistry from '../media/images/al_chemistry.jpg'
import al_physics from '../media/images/al_physics.jpg'

import ol_biology from '../media/images/ol_biology.jpg'
import ol_chemistry from '../media/images/ol_chemistry.jpg'
import ol_combined from '../media/images/ol_combined.png'
import ol_economics from '../media/images/ol_economics.png'
import ol_physics from '../media/images/ol_physics.jpg'

import cr_biology from '../media/images/cr_biology.jpg'
import cr_chemistry from '../media/images/cr_chemistry.jpg'
import cr_combined from '../media/images/cr_combined.png'
import cr_physics from '../media/images/cr_physics.jpg'

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
const images = { al_biology, al_chemistry, al_physics, ol_biology, ol_chemistry, ol_combined, ol_economics, ol_physics, cr_biology, cr_chemistry, cr_physics, cr_combined }

function generateSideButton({ level, subject, year, session, variant, generateContainerCallback, removeContainerCallback = () => { }, opened }) {
    const element = document.createElement('div')
    element.classList.add('side-container')
    element.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-${subject}` : `side-${level}-${subject}-${year}` : `side-${level}-${subject}-${year}-${session}` : `side-${level}-${subject}-${year}-${session}-${variant}`

    const buttonElement = document.createElement('div')
    buttonElement.id = variant == undefined ? session == undefined ? year == undefined ? `side-${level}-button-${subject}` : `side-${level}-button-${subject}-${year}` : `side-${level}-button-${subject}-${year}-${session}` : `side-${level}-button-${subject}-${year}-${session}-${variant}`
    buttonElement.classList.add(`side-button`)
    buttonElement.classList.add(`side-button-${variant == undefined ? session == undefined ? year == undefined ? 'subject' : 'year' : 'session' : 'variant'}`)

    const arrowDownSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowDownSvg.classList.add('side-button-arrow'); arrowDownSvg.setAttribute('width', '32'); arrowDownSvg.setAttribute('height', '32'); arrowDownSvg.setAttribute('viewBox', '0 0 256 256'); arrowDownSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowDownSvg.innerHTML = '<path fill="currentColor" d="m216.49 104.49l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 0 1 17-17L128 159l71.51-71.52a12 12 0 0 1 17 17Z" />'
    const arrowUpSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowUpSvg.classList.add('side-button-arrow'); arrowUpSvg.setAttribute('width', '32'); arrowUpSvg.setAttribute('height', '32'); arrowUpSvg.setAttribute('viewBox', '0 0 256 256'); arrowUpSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowUpSvg.innerHTML = '<path fill="currentColor"d="M216.49 168.49a12 12 0 0 1-17 0L128 97l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17" />'
    if (opened) {
        arrowDownSvg.classList.add('hidden');
    } else {
        arrowUpSvg.classList.add('hidden');
    }

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
        if (!opened) {
            container.classList.add('collapsed')
        }
        container.id = session == undefined ? year == undefined ? `side-${level}-${subject}-years-container` : `side-${level}-${subject}-${year}-sessions-container` : `side-${level}-${subject}-${year}-${session}-variants-container`

        const group = document.createElement('div')
        group.classList.add('side-group')
        group.id = session == undefined ? year == undefined ? `side-${level}-${subject}-years` : `side-${level}-${subject}-${year}-sessions` : `side-${level}-${subject}-${year}-${session}-variants`

        container.appendChild(group)

        element.appendChild(container)

        if (opened) {
            let timeout = setTimeout(() => {
                generateContainerCallback()
                clearTimeout(timeout)
            }, 1);
        }

        arrowDownSvg.addEventListener('click', () => {
            arrowDownSvg.classList.add('hidden')
            arrowUpSvg.classList.remove('hidden')
            generateContainerCallback()
            container.classList.remove('collapsed')
        })

        arrowUpSvg.addEventListener('click', () => {
            arrowDownSvg.classList.remove('hidden')
            arrowUpSvg.classList.add('hidden')
            removeContainerCallback()
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

    const imageIcon = document.createElement('div')
    imageIcon.classList.add('image-icon')
    if (subject == 'Biology') {
        imageIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M224 204h-12a92.1 92.1 0 0 0-64-143.22V32a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V85.08A68.1 68.1 0 0 1 204 152a67.39 67.39 0 0 1-24.18 52H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24m-100-80H84V36h40Zm-52 64a12 12 0 0 1 0-24h64a12 12 0 0 1 0 24Z"/></svg>'
    } else if (subject == 'Physics') {
        imageIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M209.84 47.44A91.42 91.42 0 0 0 144.62 20h-.35a91.44 91.44 0 0 0-65.12 27l-61.39 62.17a20 20 0 0 0 .08 28.21L46.5 166a19.89 19.89 0 0 0 14.15 5.86h.11a19.86 19.86 0 0 0 14.2-6l60.87-62.39a12.07 12.07 0 0 1 16.77-.12a11.63 11.63 0 0 1 3.5 8.35a12.85 12.85 0 0 1-3.66 9.11L90.19 181a20 20 0 0 0-.21 28.5l28.66 28.66a20.08 20.08 0 0 0 28.15.14l61.76-60.44l.09-.09c36.01-35.99 36.54-94.46 1.2-130.33M60.62 146.21l-23-23l18.19-18.41l22.88 22.88Zm72.2 72.18l-23-23l18.61-18l22.88 22.87Zm58.89-57.62l-23.23 22.73l-22.78-22.77L169.21 138l.15-.14a37 37 0 0 0 10.74-26.37a35.44 35.44 0 0 0-10.85-25.41a36.2 36.2 0 0 0-50.44.48l-.1.11l-23.25 23.82l-22.78-22.77l23.5-23.8A67.55 67.55 0 0 1 144.27 44h.26a67.62 67.62 0 0 1 48.21 20.29c26.11 26.49 25.64 69.76-1.03 96.48"/></svg>'
    } else if (subject == 'Chemistry') {
        imageIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M225.15 197.71L164 95.81V44h4a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h4v51.81l-61.15 101.9A20 20 0 0 0 48 228h160a20 20 0 0 0 17.15-30.29M140 44v55.14a12 12 0 0 0 1.71 6.17l35.13 58.54c-10.79.86-25.15-1.31-43.42-10.56c-14-7.08-27.46-11.33-40.27-12.76l21.14-35.22a12 12 0 0 0 1.71-6.17V44ZM55.06 204L79 164.19c13-1.11 27.62 2.42 43.62 10.52c19.61 9.92 36.25 13.31 49.85 13.31a75.44 75.44 0 0 0 17.64-2.02l10.83 18Z"/></svg>'
    } else if (subject == 'Economics') {
        imageIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v99l43.51-43.52a12 12 0 0 1 17 0L128 127l43-43h-11a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-11l-51.51 51.52a12 12 0 0 1-17 0L96 129l-52 52v15h180a12 12 0 0 1 12 12"/></svg>'
    } else if (subject == 'Combined') {
        imageIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M219.23 159.2a196.66 196.66 0 0 0-18-31.2a196.66 196.66 0 0 0 18-31.2c11.84-26.31 11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66 196.66 0 0 0-31.2 18a196.66 196.66 0 0 0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27 33.29-.43 59.6a196.66 196.66 0 0 0 18 31.2a196.66 196.66 0 0 0-18 31.2c-11.84 26.31-11.69 47.48.43 59.6c6.13 6.13 14.58 9.2 24.8 9.2c10 0 21.77-2.92 34.76-8.77a196.66 196.66 0 0 0 31.2-18a196.66 196.66 0 0 0 31.2 18c13 5.85 24.74 8.77 34.76 8.77c10.26 0 18.71-3.07 24.84-9.2c12.16-12.12 12.31-33.29.47-59.6m-17.41-105c5.25 5.26 1.79 26-16 53.78c-5.61-6.66-11.65-13.25-18.07-19.67S154.7 75.83 148 70.22c27.82-17.83 48.56-21.29 53.82-16.04ZM171.24 128a288.6 288.6 0 0 1-20.51 22.73A288.6 288.6 0 0 1 128 171.24a288.6 288.6 0 0 1-22.73-20.51A288.6 288.6 0 0 1 84.76 128A298.55 298.55 0 0 1 128 84.76a286.83 286.83 0 0 1 22.73 20.51A286.83 286.83 0 0 1 171.24 128M54.18 54.18c1.46-1.45 4.1-2.24 7.75-2.24c9.53 0 25.94 5.39 46 18.28c-6.66 5.61-13.25 11.65-19.67 18.07S75.83 101.3 70.22 108C52.39 80.18 48.93 59.44 54.18 54.18m0 147.64c-5.25-5.26-1.79-26 16-53.78c5.61 6.66 11.65 13.25 18.07 19.67s13 12.46 19.67 18.07c-27.74 17.83-48.48 21.29-53.74 16.04m147.64 0c-5.26 5.25-26 1.79-53.78-16c6.66-5.61 13.25-11.65 19.67-18.07s12.46-13 18.07-19.67c17.83 27.74 21.29 48.48 16.04 53.74M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/></svg>'
    }

    imageIcon.classList.add('hidden')
    image.classList.add('hidden'); imageIcon.classList.remove('hidden')
    image.onerror = () => { image.classList.add('hidden'); imageIcon.classList.remove('hidden') }
    image.onload = () => { image.classList.remove('hidden'); imageIcon.classList.add('hidden') }
    if (randomImage != undefined) {
        image.src = randomImages[`randomImage${randomImage + 1}`]
        image.alt = 'random image'
    } else {
        image.src = images[`${level}_${subject.toLowerCase()}`]
        image.alt = `${level} ${subject.toLowerCase()} image`
    }

    imageContainer.appendChild(imageIcon)
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