# vitepress-blog-util
This is a utility for creating blogs by vitepress.

## Functions
### `getPostList(path)`
This can be used in `docs/.vitepress/config.js` like below.

You can pass the directory which includes the blog posts written in markdown format.

#### - Example
```js
const { getPostList } = require('vitepress-blog-util/scripts')

module.exports = {
  base: '/',
  title: 'Title',
  description: 'Vitepress blog',
  themeConfig: {
    postList: getPostList('./docs/posts'),
  },
}
```

#### - Directory
```
|- docs
 |- .vitepress
 |- posts
  |- sample1.md
  |- sample2.md
 |- index.md
|- package.json
|...
```

### `usePostList()`
This can be used to get the list of blog posts.
Post has the below.

- `path` : The path of the post's file.
- `content` : The content of the post.
- `frontmatter` : The frontmatter of the post.

### `filterPostList(postList, callback)`
This can be used to filter post lists by the frontmatter.

You need to pass the post list to the 1st arg, and pass a callback function to the 2nd arg.
The callback should accept the frontmatter object as arg, and return boolean.

#### - Example
```js
const filteredPostList = filterPostList(postList, (fm) => {
  return fm.tags.includes('vitepress')
})
```
