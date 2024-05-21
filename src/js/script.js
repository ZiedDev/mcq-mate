import "../css/style.css"
import olSubjectsMS from "../json/OL_subjects_ms.json"
import alSubjectsMS from "../json/AL_subjects_ms.json"

import { generateSideButton, generateMainButton } from "./generateElements.js"

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
const home = document.getElementById('home')
const olTitle = document.createElement('h2')
olTitle.textContent = 'OL Subjects'
home.appendChild(olTitle)

const olCardsContainer = document.createElement('div')
Object.keys(olSubjectsMS).forEach(subject => {
    const subjectElement = generateMainButton('ol', subject)
    olCardsContainer.appendChild(subjectElement)
})
home.appendChild(olCardsContainer)

const alTitle = document.createElement('h2')
alTitle.textContent = 'AL Subjects'
home.appendChild(alTitle)

const alCardsContainer = document.createElement('div')
Object.keys(alSubjectsMS).forEach(subject => {
    const subjectElement = generateMainButton('al', subject)
    alCardsContainer.appendChild(subjectElement)
})
home.appendChild(alCardsContainer)