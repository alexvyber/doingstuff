export class Robot {
  id: number
  model: string
  name: string

  constructor(id: number, model: string, name: string) {
    this.id = id
    this.model = model
    this.name = name
  }

  walk(): void {
    console.log('This robot can walk')
  }
}

let robot = new Robot(1051, 'EX69', 'Avdon')
console.log(robot)
console.log(robot.id)
console.log(robot.model)
robot.walk()

console.log(typeof robot)

let robot1 = {}
console.log(robot1 instanceof Robot)
