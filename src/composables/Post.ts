import { Ref } from 'vue'

export interface Post {
  path: string
  content: string
  frontmatter: Record<string, any>
}

export function usePostList(theme: Ref<any>): Post[] {
  return theme.value.postList as Post[]
}

export function filterPostList(postList: Post[], callback: (frontmatter: Record<string, any>) => boolean): any[] {
  return postList.filter(post => callback(post.frontmatter))
}
