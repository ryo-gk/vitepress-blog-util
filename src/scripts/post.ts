import { Dirent } from "node:fs"
import { Post } from '../composables/Post'
const matter = require('gray-matter')
const { readFileSync, readdirSync } = require('fs')

function getPostList(dir: string): Post[] {
  // ex) 'pages/posts'
  const dirPath = `./docs/${dir}`
  const fileNames = readdirSync(`${dirPath}`, { withFileTypes: true })
    .flatMap((dirent: Dirent) => {
      return dirent.name
    })
  
  const post = fileNames.map((name: string) => {
    const path = `${dirPath}/${name}`
    const relativePath = `/${dir}/${extractFileName(name)}`
    const file = readFileSync(path)
    const { content, data: frontmatter } = matter(file)
    return {
      path: relativePath,
      content,
      frontmatter
    }
  })
  return post
}

function extractFileName(fileName: string) {
  return fileName.substr(0, fileName.lastIndexOf('.')) || fileName
}

module.exports = {
  getMdList: getPostList
}