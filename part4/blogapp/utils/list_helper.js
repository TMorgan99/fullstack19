const dummy = (blogs) => {
  return 1
}

const totalLikes = (bloglist) => 
  bloglist
    .reduce((acc, blog) =>  acc + blog.likes, 0)


// 
const favoriteBlog = (bloglist) => {
  const maxValue = bloglist
    .reduce((acc, blog)  =>  Math.max(acc, blog.likes), 0)
  return bloglist.find( blog => blog.likes === maxValue)

    // return bloglist[1]
}


module.exports = {
  dummy,
  favoriteBlog,
  totalLikes
}
