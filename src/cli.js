import parseArgv from "minimist"
import { greet } from './index'

var args = parseArgv(process.argv)

export function main() {
  console.log(greet(args._[2], args.drunk))
}
