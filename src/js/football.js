export function footballsect() {
    const field = document.getElementById("football-field");
    const ball = document.getElementById("ball");
    const goals = document.querySelectorAll(".goal");
    const result = document.getElementById("football-score");

    const startX = 300
    const startY = 150

    let x = startX
    let y = startY
    let score = 0

    ball.style.left = `${x}px`
    ball.style.top = `${y}px`

    document.addEventListener("keydown", (event) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault()

            const moves = {
                ArrowUp: () => (y = Math.max(0, y - 10)),
                ArrowDown: () => (y = Math.min(field.offsetHeight, y + 10)),
                ArrowLeft: () => (x = Math.max(0, x - 10)),
                ArrowRight: () => (x = Math.min(field.offsetWidth - ball.offsetWidth, x + 10))
            }

            moves[event.key]?.()

            ball.style.left = `${x}px`
            ball.style.top = `${y}px`
            checkGoal()
        }
    })

    function checkGoal() {
        const centerYBall = y + ball.offsetHeight / 2

        goals.forEach(goal => {
            const goalTop = goal.offsetTop
            const goalBottom = goalTop + goal.offsetHeight
            const goalLeft = goal.offsetLeft
            const goalRight = goalLeft + goal.offsetWidth

            const hitLeftGoal = x <= goalRight && x >= goalLeft - ball.offsetWidth
            const hitRightGoal = x + ball.offsetWidth >= goalLeft && x <= goalRight

            if ((hitLeftGoal || hitRightGoal) && centerYBall >= goalTop && centerYBall <= goalBottom){
                score++
                result.textContent = `Score: ${score}`
                alert('goal')
                resetBall()
            }
        })

    }

    function resetBall() {
        x = startX
        y = startY
        ball.style.left = `${x}px`
        ball.style.top = `${y}px`
    }
}

