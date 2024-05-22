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

// path direction behavior
const moveBackwardsArrow = document.getElementById('backwards-arrow')
const moveForwardsArrow = document.getElementById('forwards-arrow')

let backward_stack = [];
let current_path = "home"; // important to put in datatype and format of root path
let forward_stack = [];

function isBackwardAvailable() {
    return backward_stack.length > 0 ? 1 : 0;
}

function isForwardAvailable() {
    return forward_stack.length > 0 ? 1 : 0;
}

function backwardPath() {
    if (backward_stack.length == 0) return 0;
    forward_stack.push(current_path);
    current_path = backward_stack.pop()
    if (isBackwardAvailable()) {
        moveBackwardsArrow.classList.add('active')
    } else {
        moveBackwardsArrow.classList.remove('active')
    }
    if (isForwardAvailable()) {
        moveForwardsArrow.classList.add('active')
    } else {
        moveForwardsArrow.classList.remove('active')
    }

    const path = current_path.split('>')
    main.innerHTML = ''

    if (path.length == 5) {
        main.appendChild(CreateSubMenu(path[0], path[1], path[2], path[3], path[4]))
    } else if (path.length == 4) {
        main.appendChild(CreateSubMenu(path[0], path[1], path[2], path[3]))
    } else if (path.length == 3) {
        main.appendChild(CreateSubMenu(path[0], path[1], path[2]))
    } else if (path.length == 2) {
        main.appendChild(CreateSubMenu(path[0], path[1]))
    } else if (path.length <= 1) {
        main.appendChild(createHomeMenu())
    }
}

function changePath(new_path) {
    backward_stack.push(current_path);
    forward_stack = [];
    current_path = new_path;

    if (isBackwardAvailable()) {
        moveBackwardsArrow.classList.add('active')
    } else {
        moveBackwardsArrow.classList.remove('active')
    }
    if (isForwardAvailable()) {
        moveForwardsArrow.classList.add('active')
    } else {
        moveForwardsArrow.classList.remove('active')
    }
}

function forwardPath() {
    if (forward_stack.length == 0) return 0;
    backward_stack.push(current_path);
    current_path = forward_stack.pop();
    if (isBackwardAvailable()) {
        moveBackwardsArrow.classList.add('active')
    } else {
        moveBackwardsArrow.classList.remove('active')
    }
    if (isForwardAvailable()) {
        moveForwardsArrow.classList.add('active')
    } else {
        moveForwardsArrow.classList.remove('active')
    }

    const path = current_path.split('>')
    main.innerHTML = ''
    if (path.length == 5) {
        main.appendChild(CreateSubMenu(path[0], path[1], path[2], path[3], path[4]))
    } else if (path.length == 4) {
        main.appendChild(CreateSubMenu(path[0], path[1], path[2], path[3]))
    } else if (path.length == 3) {
        main.appendChild(CreateSubMenu(path[0], path[1], path[2]))
    } else if (path.length == 2) {
        main.appendChild(CreateSubMenu(path[0], path[1]))
    } else if (path.length <= 1) {
        main.appendChild(createHomeMenu())
    }
}

moveBackwardsArrow.addEventListener('click', () => {
    backwardPath()
})
moveForwardsArrow.addEventListener('click', () => {
    forwardPath()
})


// creating side buttons for ol subjects
const sideGroupOl = document.getElementById('side-group-ol')
Object.keys(olSubjectsMS).forEach(subject => {
    const subjectElement = generateSideButton('ol', subject)
    subjectElement.addEventListener('click', e => {
        if (e.target.id == `side-ol-button-${subject}` || e.target.id == `side-ol-${subject}-title`) {
            main.innerHTML = ''
            main.appendChild(CreateSubMenu('ol', subject))
            changePath(`ol>${subject}`)
        }
    })

    sideGroupOl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-ol-${subject}-years`)
    Object.keys(olSubjectsMS[subject]).forEach(year => {
        const yearElement = generateSideButton('ol', subject, year)
        yearElement.addEventListener('click', e => {
            if (e.target.id == `side-ol-button-${subject}-${year}-year` || e.target.id == `side-ol-${subject}-${year}-title`) {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('ol', subject, year))
                changePath(`ol>${subject}>${year}`)
            }
        })

        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-ol-${subject}-${year}-sessions`)
        Object.keys(olSubjectsMS[subject][year]).forEach(session => {
            const sessionElement = generateSideButton('ol', subject, year, session)
            sessionElement.addEventListener('click', e => {
                if (e.target.id == `side-ol-button-${subject}-${year}-${session}-year` || e.target.id == `side-ol-${subject}-${year}-${session}-title`) {
                    main.innerHTML = ''
                    main.appendChild(CreateSubMenu('ol', subject, year, session))
                    changePath(`ol>${subject}>${year}>${session}`)
                }
            })

            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-ol-${subject}-${year}-${session}-variants`)
            Object.keys(olSubjectsMS[subject][year][session]).forEach(variant => {
                const variantElement = generateSideButton('ol', subject, year, session, variant)
                variantElement.addEventListener('click', e => {
                    if (e.target.id == `side-ol-button-${subject}-${year}-${session}-${variant}-year` || e.target.id == `side-ol-${subject}-${year}-${session}-${variant}-title`) {
                        main.innerHTML = `ol > ${subject} > ${year} > ${session} > ${variant + 1}`
                        changePath(`ol>${subject}>${year}>${session}>${variant}`)
                    }
                })

                sideSessionVariants.appendChild(variantElement)
            })
        })
    })
})

// creating side buttons for al subjects
const sideGroupAl = document.getElementById('side-group-al')
Object.keys(alSubjectsMS).forEach(subject => {
    const subjectElement = generateSideButton('al', subject)
    subjectElement.addEventListener('click', e => {
        if (e.target.id == `side-al-button-${subject}` || e.target.id == `side-al-${subject}-title`) {
            main.innerHTML = ''
            main.appendChild(CreateSubMenu('al', subject))
            changePath(`al>${subject}`)
        }
    })

    sideGroupAl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-al-${subject}-years`)
    Object.keys(alSubjectsMS[subject]).forEach(year => {
        const yearElement = generateSideButton('al', subject, year)
        yearElement.addEventListener('click', e => {
            if (e.target.id == `side-al-button-${subject}-${year}-year` || e.target.id == `side-al-${subject}-${year}-title`) {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('al', subject, year))
                changePath(`al>${subject}>${year}`)
            }
        })

        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-al-${subject}-${year}-sessions`)
        Object.keys(alSubjectsMS[subject][year]).forEach(session => {
            const sessionElement = generateSideButton('al', subject, year, session)
            sessionElement.addEventListener('click', e => {
                if (e.target.id == `side-al-button-${subject}-${year}-${session}-year` || e.target.id == `side-al-${subject}-${year}-${session}-title`) {
                    main.innerHTML = ''
                    main.appendChild(CreateSubMenu('al', subject, year, session))
                    changePath(`al>${subject}>${year}>${session}`)
                }
            })

            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-al-${subject}-${year}-${session}-variants`)
            Object.keys(alSubjectsMS[subject][year][session]).forEach(variant => {
                const variantElement = generateSideButton('al', subject, year, session, variant)
                variantElement.addEventListener('click', e => {
                    if (e.target.id == `side-al-button-${subject}-${year}-${session}-${variant}-year` || e.target.id == `side-al-${subject}-${year}-${session}-${variant}-title`) {
                        main.innerHTML = `al > ${subject} > ${year} > ${session} > ${variant + 1}`
                        changePath(`al>${subject}>${year}>${session}>${variant}`)
                    }
                })

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
        subjectElement.addEventListener('click', () => {
            main.innerHTML = ''
            main.appendChild(CreateSubMenu('ol', subject))
            changePath(`ol>${subject}`)
        })

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
        subjectElement.addEventListener('click', () => {
            main.innerHTML = ''
            main.appendChild(CreateSubMenu('al', subject))
            changePath(`al>${subject}`)
        })

        alCardsContainer.appendChild(subjectElement)
    })
    home.appendChild(alCardsContainer)

    return home
}

// creating the sub menu buttons
function CreateSubMenu(level, subject, year, session) {
    const menu = document.createElement('div')
    menu.id = `Select a ${session == undefined ? year == undefined ? 'years-menu' : 'sessions-menu' : 'variants-menu'}`
    menu.classList.add('sub-menu')
    const title = document.createElement('h2')
    title.textContent = `Select a ${session == undefined ? year == undefined ? 'year' : 'session' : 'variant'}`
    menu.appendChild(title)

    const cardsContainer = document.createElement('div')
    if (level.toLowerCase() == 'ol') {
        if (session == undefined) {
            if (year == undefined) {
                Object.keys(olSubjectsMS[subject]).forEach(year => {
                    const yearElement = generateMainButton('ol', subject, year)
                    createRotatingCard(yearElement)
                    yearElement.addEventListener('click', () => {
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('ol', subject, year))
                        changePath(`ol>${subject}>${year}`)
                    })

                    cardsContainer.appendChild(yearElement)
                })
            } else {
                Object.keys(olSubjectsMS[subject][year]).forEach(session => {
                    const sessionElement = generateMainButton('ol', subject, year, session)
                    createRotatingCard(sessionElement)
                    sessionElement.addEventListener('click', () => {
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('ol', subject, year, session))
                        changePath(`ol>${subject}>${year}>${session}`)
                    })

                    cardsContainer.appendChild(sessionElement)

                })
            }
        } else {
            Object.keys(olSubjectsMS[subject][year][session]).forEach(variant => {
                const variantElement = generateMainButton('ol', subject, year, session, variant)
                createRotatingCard(variantElement)
                variantElement.addEventListener('click', () => {
                    main.innerHTML = `${level} > ${subject} > ${year} > ${session} > ${variant + 1}`
                    changePath(`ol>${subject}>${year}>${session}>${variant}`)
                })

                cardsContainer.appendChild(variantElement)
            })
        }
    } else if (level.toLowerCase() == 'al') {
        if (session == undefined) {
            if (year == undefined) {
                Object.keys(alSubjectsMS[subject]).forEach(year => {
                    const yearElement = generateMainButton('al', subject, year)
                    createRotatingCard(yearElement)
                    yearElement.addEventListener('click', () => {
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('al', subject, year))
                        changePath(`al>${subject}>${year}`)
                    })

                    cardsContainer.appendChild(yearElement)
                })
            } else {
                Object.keys(alSubjectsMS[subject][year]).forEach(session => {
                    const sessionElement = generateMainButton('al', subject, year, session)
                    createRotatingCard(sessionElement)
                    sessionElement.addEventListener('click', () => {
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('al', subject, year, session))
                        changePath(`al>${subject}>${year}>${session}`)
                    })

                    cardsContainer.appendChild(sessionElement)

                })
            }
        } else {
            Object.keys(alSubjectsMS[subject][year][session]).forEach(variant => {
                const variantElement = generateMainButton('al', subject, year, session, variant)
                createRotatingCard(variantElement)
                variantElement.addEventListener('click', () => {
                    main.innerHTML = `${level} > ${subject} > ${year} > ${session} > ${variant + 1}`
                    changePath(`al>${subject}>${year}>${session}>${variant}`)
                })

                cardsContainer.appendChild(variantElement)
            })
        }
    }
    menu.appendChild(cardsContainer)

    return menu
}

function createRotatingCard(elementContainer) {
    const element = elementContainer.children[0]

    elementContainer.addEventListener('mouseenter', e => {
        element.style.transition = `transform 100ms ease-in-out, scale 150ms ease, box-shadow 150ms ease`
        const aTimeout = setTimeout(() => {
            rotateCard(e)
        }, 50);
        const anotherTimeout = setTimeout(() => {
            element.style.transition = `scale 150ms ease, box-shadow 150ms ease`
            elementContainer.addEventListener('mousemove', rotateCard)
        }, 100);

        elementContainer.addEventListener('mouseleave', e => {
            clearTimeout(aTimeout)
            clearTimeout(anotherTimeout)

            elementContainer.removeEventListener('mousemove', rotateCard)
            element.style.transition = `transform 100ms ease-in-out, scale 150ms ease, box-shadow 150ms ease`
            element.style.transform = ``
        })
    })

    function rotateCard(e) {
        const mousePos = {
            x: (((e.clientX - elementContainer.getBoundingClientRect().x) / elementContainer.getBoundingClientRect().width * (45 / 2)) - (45 / 2) / 2),
            y: (((e.clientY - elementContainer.getBoundingClientRect().y) / elementContainer.getBoundingClientRect().height * (45 / 2)) - (45 / 2) / 2)
        }
        element.style.transform = `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.025)`
    }
}

// appending home to main
const main = document.getElementById('main')
main.appendChild(createHomeMenu())