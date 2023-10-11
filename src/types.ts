export interface FetchedPost {
  title: string
  id: number
  featuredImage: string
  altFeaturedImage: string
  content: string
  description: string
  category: {
    name: string
  }
  subcategory: { name: string, category: string }
  tags: string[]
}