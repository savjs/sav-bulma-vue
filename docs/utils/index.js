import {readFileSync} from 'fs'

export function fileGetContent (file) {
  return readFileSync(file).toString()
}
