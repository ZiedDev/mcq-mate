import "../css/style.css"
import olSubjectsMS from "../json/OL_subjects_ms.json"
import alSubjectsMS from "../json/AL_subjects_ms.json"

import { generateSideButton, generateMainButton } from "./generateElements.js"
import createModal from "./modal.js"

// credits button behavior
const creditsButton = document.getElementById('credits')
creditsButton.addEventListener('click', () => {
    createModal(
        'Credit', // title
        [
            'Thanks For using <br> the website <3',
            'Website created by <br> <a href="https://github.com/ZiedDev">Zied</a> & <a href="https://github.com/omar-elsherbiny">Sherbo</a>',
            'Repository: <br> <a href="https://github.com/ZiedDev/mcq-mate">MCQ Mate</a>'
        ], // content
    )
})

// creating side buttons for ol subjects
const sideGroupOl = document.getElementById('side-group-ol')
Object.keys(olSubjectsMS).forEach(subject => {
    const subjectElement = generateSideButton('ol', subject)
    sideGroupOl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-ol-${subject}-years`)
    Object.keys(olSubjectsMS[subject]).forEach(year => {
        const yearElement = generateSideButton('ol', subject, year)
        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-ol-${subject}-${year}-sessions`)
        Object.keys(olSubjectsMS[subject][year]).forEach(session => {
            const sessionElement = generateSideButton('ol', subject, year, session)
            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-ol-${subject}-${year}-${session}-variants`)
            Object.keys(olSubjectsMS[subject][year][session]).forEach(variant => {
                const variantElement = generateSideButton('ol', subject, year, session, variant)
                sideSessionVariants.appendChild(variantElement)
            })
        })
    })
})

// creating side buttons for ol subjects
const sideGroupAl = document.getElementById('side-group-al')
Object.keys(alSubjectsMS).forEach(subject => {
    const subjectElement = generateSideButton('al', subject)
    sideGroupAl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-al-${subject}-years`)
    Object.keys(alSubjectsMS[subject]).forEach(year => {
        const yearElement = generateSideButton('al', subject, year)
        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-al-${subject}-${year}-sessions`)
        Object.keys(alSubjectsMS[subject][year]).forEach(session => {
            const sessionElement = generateSideButton('al', subject, year, session)
            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-al-${subject}-${year}-${session}-variants`)
            Object.keys(alSubjectsMS[subject][year][session]).forEach(variant => {
                const variantElement = generateSideButton('al', subject, year, session, variant)
                sideSessionVariants.appendChild(variantElement)
            })
        })
    })
})

// creating home menu
function createHomeMenu() {
    const home = document.createElement('div')
    home.id = 'home'
    home.classList.add('home')
    const olTitle = document.createElement('h2')
    olTitle.textContent = 'OL Subjects'
    home.appendChild(olTitle)

    const olCardsContainer = document.createElement('div')
    Object.keys(olSubjectsMS).forEach(subject => {
        const subjectElement = generateMainButton('ol', subject)
        createRotatingCard(subjectElement)
        olCardsContainer.appendChild(subjectElement)
    })
    home.appendChild(olCardsContainer)

    const alTitle = document.createElement('h2')
    alTitle.textContent = 'AL Subjects'
    home.appendChild(alTitle)

    const alCardsContainer = document.createElement('div')
    Object.keys(alSubjectsMS).forEach(subject => {
        const subjectElement = generateMainButton('al', subject)
        createRotatingCard(subjectElement)
        alCardsContainer.appendChild(subjectElement)
    })
    home.appendChild(alCardsContainer)

    return home
}

function createRotatingCard(elementContainer) {
    const element = elementContainer.children[0]

    elementContainer.addEventListener('mouseenter', e => {
        element.style.transition = `transform 100ms ease-in-out, scale 150ms ease`
        const aTimeout = setTimeout(() => {
            rotateCard(e)
        }, 50);
        const anotherTimeout = setTimeout(() => {
            element.style.transition = `scale 150ms ease`
            elementContainer.addEventListener('mousemove', rotateCard)
        }, 100);

        elementContainer.addEventListener('mouseleave', e => {
            clearTimeout(aTimeout)
            clearTimeout(anotherTimeout)

            elementContainer.removeEventListener('mousemove', rotateCard)
            element.style.transition = `transform 100ms ease-in-out, scale 150ms ease`
            element.style.transform = ``
        })
    })

    function rotateCard(e) {
        const mousePos = {
            x: (((e.clientX - elementContainer.getBoundingClientRect().x) / elementContainer.getBoundingClientRect().width * (45 / 1.75)) - (45 / 1.75) / 2),
            y: (((e.clientY - elementContainer.getBoundingClientRect().y) / elementContainer.getBoundingClientRect().height * (45 / 1.75)) - (45 / 1.75) / 2)
        }
        element.style.transform = `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.05)`
    }
}

// appending home to main
const main = document.getElementById('main')
main.appendChild(createHomeMenu())