import "../css/style.css"
import olSubjectsMS from "../json/OL_subjects_ms.json"
import alSubjectsMS from "../json/AL_subjects_ms.json"

import { generateSideButton, generateMainButton } from "./generateElements.js"
import createModal from "./modal.js"

// GLOBAL VARIABLES
let userAnswers = []
let inExam = false
let confirm = false

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

    updatePathElement(true)
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

    updatePathElement()
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

    updatePathElement(true)
}

function updatePathElement(createSheet) {
    const path = document.getElementById('path')
    const pathText = current_path.split('>')
    main.innerHTML = ''
    if (pathText.length == 5) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        path.appendChild(createPathElement(pathText[2]))
        path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov'))
        path.appendChild(createPathElement(`Variant ${Number(pathText[4]) + 1}`, true))
        if (createSheet) {
            inExam = true
            main.appendChild(createBubbleSheetMenu(pathText[0], pathText[1], pathText[2], pathText[3], pathText[4]))
        }
    } else if (pathText.length == 4) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        path.appendChild(createPathElement(pathText[2]))
        path.appendChild(createPathElement(pathText[3] == 'm' ? 'Feb / Mar' : pathText[3] == 's' ? 'May / Jun' : 'Oct / Nov'))
        main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2], pathText[3]))
    } else if (pathText.length == 3) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        path.appendChild(createPathElement(pathText[2]))
        main.appendChild(CreateSubMenu(pathText[0], pathText[1], pathText[2]))
    } else if (pathText.length == 2) {
        path.innerHTML = ''
        path.appendChild(createPathElement(`${pathText[0].toUpperCase()} ${pathText[1]}`))
        main.appendChild(CreateSubMenu(pathText[0], pathText[1]))
    } else if (pathText.length <= 1) {
        path.innerHTML = ''
        main.appendChild(createHomeMenu())
    }
}

moveBackwardsArrow.addEventListener('click', () => {
    if (isBackwardAvailable()) {
        navConfirm(() => { backwardPath() })
    }
})
moveForwardsArrow.addEventListener('click', () => {
    if (isForwardAvailable()) {
        navConfirm(() => { forwardPath() })
    }
})

function navConfirm(confirmCallback) {
    if (inExam) {
        createModal(
            'Are you sure?', // title
            [
                'Navigating will lose your past progress on the current exam',
            ], // content,
            [
                'Confirm',
                () => {
                    inExam = false
                    confirmCallback()
                },
            ],
            [
                'Cancel',
                () => { }
            ]
        )
    } else {
        confirmCallback()
    }
}

function createPathElement(title, last) {
    const element = document.createElement('div')

    const pathElement = document.createElement('div')
    pathElement.textContent = title
    element.appendChild(pathElement)

    if (!last) {
        const arrowElement = document.createElementNS("http://www.w3.org/2000/svg", "svg"); arrowElement.classList.add('side-button-arrow'); arrowElement.setAttribute('width', '32'); arrowElement.setAttribute('height', '32'); arrowElement.setAttribute('viewBox', '0 0 256 256'); arrowElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); arrowElement.innerHTML = '                    <path fill="currentColor" d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17" />'
        element.appendChild(arrowElement)
    }

    return element
}


// creating side buttons for ol subjects
const sideGroupOl = document.getElementById('side-group-ol')
Object.keys(olSubjectsMS).forEach(subject => {
    const subjectElement = generateSideButton('ol', subject)
    subjectElement.addEventListener('click', e => {
        if (e.target.id == `side-ol-button-${subject}` || e.target.id == `side-ol-${subject}-title`) {
            navConfirm(() => {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('ol', subject))
                changePath(`ol>${subject}`)
            })
        }
    })

    sideGroupOl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-ol-${subject}-years`)
    Object.keys(olSubjectsMS[subject]).forEach(year => {
        const yearElement = generateSideButton('ol', subject, year)
        yearElement.addEventListener('click', e => {
            if (e.target.id == `side-ol-button-${subject}-${year}` || e.target.id == `side-ol-${subject}-${year}-title`) {
                navConfirm(() => {
                    main.innerHTML = ''
                    main.appendChild(CreateSubMenu('ol', subject, year))
                    changePath(`ol>${subject}>${year}`)
                })
            }
        })

        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-ol-${subject}-${year}-sessions`)
        Object.keys(olSubjectsMS[subject][year]).forEach(session => {
            const sessionElement = generateSideButton('ol', subject, year, session)
            sessionElement.addEventListener('click', e => {
                if (e.target.id == `side-ol-button-${subject}-${year}-${session}` || e.target.id == `side-ol-${subject}-${year}-${session}-title`) {
                    navConfirm(() => {
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('ol', subject, year, session))
                        changePath(`ol>${subject}>${year}>${session}`)
                    })
                }

            })

            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-ol-${subject}-${year}-${session}-variants`)
            Object.keys(olSubjectsMS[subject][year][session]).forEach(variant => {
                if (olSubjectsMS[subject][year][session][variant] != null) {
                    const variantElement = generateSideButton('ol', subject, year, session, variant)
                    variantElement.addEventListener('click', e => {
                        if (e.target.id == `side-ol-button-${subject}-${year}-${session}-${variant}` || e.target.id == `side-ol-${subject}-${year}-${session}-${variant}-title`) {
                            navConfirm(() => {
                                inExam = true
                                main.innerHTML = ``
                                changePath(`ol>${subject}>${year}>${session}>${variant}`)
                                main.appendChild(createBubbleSheetMenu('ol', subject, year, session, variant))
                            })
                        }
                    })

                    sideSessionVariants.appendChild(variantElement)
                }
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
            navConfirm(() => {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('al', subject))
                changePath(`al>${subject}`)
            })
        }
    })

    sideGroupAl.appendChild(subjectElement)

    const sideSubjectYears = document.getElementById(`side-al-${subject}-years`)
    Object.keys(alSubjectsMS[subject]).forEach(year => {
        const yearElement = generateSideButton('al', subject, year)
        yearElement.addEventListener('click', e => {
            if (e.target.id == `side-al-button-${subject}-${year}-year` || e.target.id == `side-al-${subject}-${year}-title`) {
                navConfirm(() => {
                    main.innerHTML = ''
                    main.appendChild(CreateSubMenu('al', subject, year))
                    changePath(`al>${subject}>${year}`)
                })
            }
        })

        sideSubjectYears.appendChild(yearElement)

        const sideYearSessions = document.getElementById(`side-al-${subject}-${year}-sessions`)
        Object.keys(alSubjectsMS[subject][year]).forEach(session => {
            const sessionElement = generateSideButton('al', subject, year, session)
            sessionElement.addEventListener('click', e => {
                if (e.target.id == `side-al-button-${subject}-${year}-${session}-year` || e.target.id == `side-al-${subject}-${year}-${session}-title`) {
                    navConfirm(() => {
                        main.innerHTML = ''
                        main.appendChild(CreateSubMenu('al', subject, year, session))
                        changePath(`al>${subject}>${year}>${session}`)
                    })
                }
            })

            sideYearSessions.appendChild(sessionElement)

            const sideSessionVariants = document.getElementById(`side-al-${subject}-${year}-${session}-variants`)
            Object.keys(alSubjectsMS[subject][year][session]).forEach(variant => {
                if (olSubjectsMS[subject][year][session][variant] != null) {
                    const variantElement = generateSideButton('al', subject, year, session, variant)
                    variantElement.addEventListener('click', e => {
                        if (e.target.id == `side-al-button-${subject}-${year}-${session}-${variant}-year` || e.target.id == `side-al-${subject}-${year}-${session}-${variant}-title`) {
                            navConfirm(() => {
                                inExam = true
                                main.innerHTML = ``
                                changePath(`al>${subject}>${year}>${session}>${variant}`)
                                main.appendChild(createBubbleSheetMenu('al', subject, year, session, variant))
                            })
                        }
                    })

                    sideSessionVariants.appendChild(variantElement)
                }
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
            navConfirm(() => {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('ol', subject))
                changePath(`ol>${subject}`)
            })
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
            navConfirm(() => {
                main.innerHTML = ''
                main.appendChild(CreateSubMenu('al', subject))
                changePath(`al>${subject}`)
            })
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
                        navConfirm(() => {
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('ol', subject, year))
                            changePath(`ol>${subject}>${year}`)
                        })
                    })

                    cardsContainer.appendChild(yearElement)
                })
            } else {
                Object.keys(olSubjectsMS[subject][year]).forEach(session => {
                    const sessionElement = generateMainButton('ol', subject, year, session)
                    createRotatingCard(sessionElement)
                    sessionElement.addEventListener('click', () => {
                        navConfirm(() => {
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('ol', subject, year, session))
                            changePath(`ol>${subject}>${year}>${session}`)
                        })
                    })

                    cardsContainer.appendChild(sessionElement)

                })
            }
        } else {
            Object.keys(olSubjectsMS[subject][year][session]).forEach(variant => {
                if (olSubjectsMS[subject][year][session][variant] != null) {
                    const variantElement = generateMainButton('ol', subject, year, session, variant)
                    createRotatingCard(variantElement)
                    variantElement.addEventListener('click', () => {
                        navConfirm(() => {
                            inExam = true
                            main.innerHTML = ``
                            changePath(`ol>${subject}>${year}>${session}>${variant}`)
                            main.appendChild(createBubbleSheetMenu('ol', subject, year, session, variant))
                        })
                    })

                    cardsContainer.appendChild(variantElement)
                }
            })
        }
    } else if (level.toLowerCase() == 'al') {
        if (session == undefined) {
            if (year == undefined) {
                Object.keys(alSubjectsMS[subject]).forEach(year => {
                    const yearElement = generateMainButton('al', subject, year)
                    createRotatingCard(yearElement)
                    yearElement.addEventListener('click', () => {
                        navConfirm(() => {
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('al', subject, year))
                            changePath(`al>${subject}>${year}`)
                        })
                    })

                    cardsContainer.appendChild(yearElement)
                })
            } else {
                Object.keys(alSubjectsMS[subject][year]).forEach(session => {
                    const sessionElement = generateMainButton('al', subject, year, session)
                    createRotatingCard(sessionElement)
                    sessionElement.addEventListener('click', () => {
                        navConfirm(() => {
                            main.innerHTML = ''
                            main.appendChild(CreateSubMenu('al', subject, year, session))
                            changePath(`al>${subject}>${year}>${session}`)
                        })
                    })

                    cardsContainer.appendChild(sessionElement)

                })
            }
        } else {
            Object.keys(alSubjectsMS[subject][year][session]).forEach(variant => {
                if (olSubjectsMS[subject][year][session][variant] != null) {
                    const variantElement = generateMainButton('al', subject, year, session, variant)
                    createRotatingCard(variantElement)
                    variantElement.addEventListener('click', () => {
                        navConfirm(() => {
                            inExam = true
                            main.innerHTML = `${level} > ${subject} > ${year} > ${session} > ${variant + 1}`
                            changePath(`al>${subject}>${year}>${session}>${variant}`)
                            main.appendChild(createBubbleSheetMenu('al', subject, year, session, variant))
                        })
                    })

                    cardsContainer.appendChild(variantElement)
                }
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

// pdf viewer
const pdfViewer = document.createElement('div')
pdfViewer.id = 'pdf-viewer'
pdfViewer.classList.add('pdf-viewer')

import WebViewer from '@pdftron/pdfjs-express'
WebViewer({
    licenseKey: 'QFn6U78TMfzwzFamsiBl',
    path: './pdf-viewer', // point to where the files you copied are served from
    initialDoc: './pdfs/0620_w23_qp_43.pdf' // path to your document
}, pdfViewer).then((instance) => {
    instance.UI.setTheme('dark');
    instance.UI.disableElements(['toolbarGroup-FillAndSign', 'themeChangeButton', 'languageButton', 'toggleNotesButton']);
})

function createBubbleSheetMenu(level, subject, year, session, variant) {
    const menu = document.createElement('div')
    menu.id = 'bubble-sheet-menu'
    menu.classList.add('bubble-sheet-menu')

    const title = document.createElement('div')
    title.classList.add('bubble-sheet-title')
    title.id = 'bubble-sheet-title'
    title.textContent = 'K start the exam ya nigger'
    menu.appendChild(title)

    const bubbleSheetContainer = document.createElement('div')
    bubbleSheetContainer.id = 'bubble-sheet-container'
    bubbleSheetContainer.classList.add('bubble-sheet-container')

    let modelAnswers = level == 'ol' ? olSubjectsMS[subject][year][session][variant] : alSubjectsMS[subject][year][session][variant]
    userAnswers = Array(modelAnswers.length).fill('')

    for (let i = 0; i < modelAnswers.length; i++) {
        const questionNumber = document.createElement('div')
        questionNumber.classList.add('bubble-box')
        questionNumber.textContent = i + 1
        questionNumber.id = `question-${i}-number`
        bubbleSheetContainer.appendChild(questionNumber)

        const questionA = document.createElement('div')
        questionA.classList.add('bubble-box')
        questionA.classList.add('bubble-choice')
        questionA.textContent = 'A'
        questionA.id = `question-${i}-a`
        questionA.addEventListener('click', () => {
            questionA.classList.add('bubble-chosen')
            questionB.classList.remove('bubble-chosen')
            questionC.classList.remove('bubble-chosen')
            questionD.classList.remove('bubble-chosen')
            userAnswers[i] = 'A'
        })
        bubbleSheetContainer.appendChild(questionA)

        const questionB = document.createElement('div')
        questionB.classList.add('bubble-box')
        questionB.classList.add('bubble-choice')
        questionB.textContent = 'B'
        questionB.id = `question-${i}-b`
        questionB.addEventListener('click', () => {
            questionA.classList.remove('bubble-chosen')
            questionB.classList.add('bubble-chosen')
            questionC.classList.remove('bubble-chosen')
            questionD.classList.remove('bubble-chosen')
            userAnswers[i] = 'B'
        })
        bubbleSheetContainer.appendChild(questionB)

        const questionC = document.createElement('div')
        questionC.classList.add('bubble-box')
        questionC.classList.add('bubble-choice')
        questionC.textContent = 'C'
        questionC.id = `question-${i}-c`
        questionC.addEventListener('click', () => {
            questionA.classList.remove('bubble-chosen')
            questionB.classList.remove('bubble-chosen')
            questionC.classList.add('bubble-chosen')
            questionD.classList.remove('bubble-chosen')
            userAnswers[i] = 'C'
        })
        bubbleSheetContainer.appendChild(questionC)

        const questionD = document.createElement('div')
        questionD.classList.add('bubble-box')
        questionD.classList.add('bubble-choice')
        questionD.textContent = 'D'
        questionD.id = `question-${i}-d`
        questionD.addEventListener('click', () => {
            questionA.classList.remove('bubble-chosen')
            questionB.classList.remove('bubble-chosen')
            questionC.classList.remove('bubble-chosen')
            questionD.classList.add('bubble-chosen')
            userAnswers[i] = 'D'
        })
        bubbleSheetContainer.appendChild(questionD)
    }
    menu.appendChild(bubbleSheetContainer)


    const buttonsContainer = document.createElement('div')
    const submitButton = document.createElement('button')
    submitButton.textContent = 'Submit'
    submitButton.classList.add('bubble-sheet-submit-button')
    submitButton.id = 'bubble-sheet-submit-button'

    const revealButton = document.createElement('button')
    revealButton.textContent = 'Reveal all answers'
    revealButton.classList.add('bubble-sheet-reveal-button')
    revealButton.id = 'bubble-sheet-reveal-button'

    const mark = document.createElement('div')
    mark.id = 'exam-mark'
    mark.classList.add('exam-mark')
    mark.textContent = `- / ${modelAnswers.length}`

    submitButton.addEventListener('click', () => {
        if (userAnswers.includes('')) {
            createModal(
                'Are you sure?', // title
                [
                    'Seems like there are some questions you missed. <br> Would you like to correct the ones you have solved',
                ], // content,
                [
                    'Confirm',
                    () => {
                        let correctAnswers = 0;
                        for (let i = 0; i < modelAnswers.length; i++) {
                            if (modelAnswers[i] == userAnswers[i]) {
                                correctAnswers++
                                const correctQuestion = document.getElementById(`question-${i}-number`)
                                correctQuestion.classList.add('correct-question')
                            } else if (userAnswers[i] == '') { } else {
                                const wrongQuestion = document.getElementById(`question-${i}-number`)
                                wrongQuestion.classList.add('wrong-question')

                                const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                                correctedQuestion.classList.add('corrected-question')
                            }
                        }
                        mark.textContent = `${correctAnswers} / ${modelAnswers.length}`
                    },
                ],
                [
                    'Cancel',
                    () => { }
                ]
            )
        } else {
            let correctAnswers = 0;
            for (let i = 0; i < modelAnswers.length; i++) {
                if (modelAnswers[i] == userAnswers[i]) {
                    correctAnswers++
                    const correctQuestion = document.getElementById(`question-${i}-number`)
                    correctQuestion.classList.add('correct-question')
                } else if (userAnswers[i] == '') { } else {
                    const wrongQuestion = document.getElementById(`question-${i}-number`)
                    wrongQuestion.classList.add('wrong-question')

                    const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                    correctedQuestion.classList.add('corrected-question')
                }
            }
            mark.textContent = `${correctAnswers} / ${modelAnswers.length}`
        }
    })

    revealButton.addEventListener('click', () => {
        createModal(
            'Are you sure?', // title
            [
                'This will only highlight the correct answers and will not correct your answers',
            ], // content,
            [
                'Confirm',
                () => {
                    for (let i = 0; i < modelAnswers.length; i++) {
                        const correctedQuestion = document.getElementById(`question-${i}-${modelAnswers[i].toLowerCase()}`)
                        correctedQuestion.classList.add('corrected-question')
                    }
                },
            ],
            [
                'Cancel',
                () => { }
            ]
        )
    })
    buttonsContainer.appendChild(submitButton)
    buttonsContainer.appendChild(revealButton)

    menu.appendChild(buttonsContainer)
    menu.appendChild(mark)

    const switchToPdf = document.createElement('div')
    switchToPdf.classList.add('switch-to-pdf')
    switchToPdf.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ffffff" d="M200 164v8h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24Zm-108 8a32 32 0 0 1-32 32h-4v4a12 12 0 0 1-24 0v-56a12 12 0 0 1 12-12h16a32 32 0 0 1 32 32m-24 0a8 8 0 0 0-8-8h-4v16h4a8 8 0 0 0 8-8m100 8a40 40 0 0 1-40 40h-16a12 12 0 0 1-12-12v-56a12 12 0 0 1 12-12h16a40 40 0 0 1 40 40m-24 0a16 16 0 0 0-16-16h-4v32h4a16 16 0 0 0 16-16M36 108V40a20 20 0 0 1 20-20h96a12 12 0 0 1 8.49 3.52l56 56A12 12 0 0 1 220 88v20a12 12 0 0 1-24 0v-4h-48a12 12 0 0 1-12-12V44H60v64a12 12 0 0 1-24 0m124-51v23h23Z"/></svg>`
    menu.appendChild(switchToPdf)

    return menu
}

// appending home to main
const main = document.getElementById('main')
main.appendChild(createHomeMenu())