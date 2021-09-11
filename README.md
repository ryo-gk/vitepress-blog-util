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
    postList: getPostList('pages/posts'),
  },
}
```

### `usePostList()`
This can be used to get the list of blog posts.
Post has the belows.

- `path` : The path of the post's file.
- `content` : The content of the post.
- `frontmatter` : The frontmatter of the post.

### `filterPostList(postList, callback)`
This can be used to filter post list by the frontmatter.

You need to pass post list to 1st arg, and pass callback function to 2nd arg.
The callback should accept frontmatter as arg, and return boolean.

#### - Example
```js
const filteredPostList = filterPostList(postList, (fm) => {
  return fm.tags.includes('vitepress')
})
```
