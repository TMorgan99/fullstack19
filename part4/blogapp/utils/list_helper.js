const _ = require('lodash')

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
}

// // TODO
// const mostBlogs = (bloglist) => {

/* 
 * create a histogram from the author field,
 * find the maxValue of this list,
 * find the author(s) that produced this maxValue.
 */

 //   const hist = _.countBy(bloglist, 'author')
//   console.log( '>>mostBlogs: ', hist)
//   console.log( '>>mostBlogs: values: ', Object.values( hist ))
//   const maxValue = .max( Object.values( hist) )
// // find in hist, keys with values of maxValue.
//   _.filter(hist, manValue)
//   // debugger

// }


const mostLikes = (bloglist) => {

}



module.exports = {
  dummy,
  favoriteBlog,
  // mostBlogs,
  totalLikes
}
