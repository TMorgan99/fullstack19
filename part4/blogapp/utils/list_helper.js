const dummy = (blogs) => {
  return 1
}

const totalLikes = (bloglist) => 
  bloglist
    .reduce((acc, blog) =>  acc + blog.likes, 0)

  module.exports = {
  dummy,
  totalLikes
}
