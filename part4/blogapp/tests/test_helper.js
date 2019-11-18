const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Blog#1',
    author: 'An Ant',
    url: 'http://example.com/blog#1',
    likes: 5,
  },
  {
    title: 'Friendly Javascript',
    author: 'Any Bee',
    url: 'http://example.com/blog#2',
    likes: 1,
  },
  {
    title: 'Blog#3',
    author: 'Charlie',
    url: 'http://example.com/blog#3',
    likes: 5,
  },
  {
    title: 'Blog#4',
    author: 'Wayne',
    url: 'http://example.com/blog#4',
    likes: 15,
  },
  {
    title: 'Blog#5',
    author: 'Walking Elephant',
    url: 'http://example.com/blog#5',
    likes: 5,
  },
  {
    title: 'Blog#6',
    author: 'Charlie',
    url: 'http://example.com/blog#6',
    likes: 2,
  },
]

const nonExistingId = async () => {
  const blog = new Blog(
    { 
      title: 'willremovethissoon', // author: 'bob', url: 'http://salad.com'
     }
    )
  await blog.save()
  await blog.remove()
  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb
}
