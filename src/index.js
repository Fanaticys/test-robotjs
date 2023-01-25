const robot = require("robotjs");
const { sleep } = require('./utils')

async function main() {
  await sleep(1000)

  robot.setMouseDelay(2000);

  const screenSize = robot.getScreenSize()
  const top = screenSize.height / 2
  const left = screenSize.width / 2
  robot.moveMouseSmooth(left, top)
  robot.mouseClick()

  await sleep(1000)

  robot.moveMouseSmooth(left + 50, top + 50)
  robot.mouseClick()
}

main()