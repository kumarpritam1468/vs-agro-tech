const slideRight = (delay) => {
    return {
        initial: {
            x: '-10rem',
            y: 0,
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: .75,
                delay: delay
            }
        }
    }
}

const slideLeft = (delay) => {
    return {
        initial: {
            x: '10rem',
            y: 0,
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: .75,
                delay: delay
            }
        }
    }
}

const slideDown = (delay) => {
    return {
        initial: {
            x: 0,
            y: '-10rem',
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: .75,
                delay: delay
            }
        }
    }
}

const slideUp = (delay) => {
    return {
        initial: {
            x: 0,
            y: '10rem',
            opacity: 0
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: .75,
                delay: delay
            }
        }
    }
}

export { slideDown, slideLeft, slideRight, slideUp };