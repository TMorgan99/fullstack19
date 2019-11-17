const listHelper = require('../utils/list_helper')

describe('favorite blog', () => {
  const listOfBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f3',
        title: 'How to eat a peach',
        author: 'Brad Pitt',
        url: 'http://www.google.com/',
        likes: 12,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Distateful',
        author: 'Pina co Lata',
        url: 'http://www.u.arizona.edu/Go_To_Considered_Distasteful.html',
        likes: 5,
        __v: 0
      }
  
  ]

  test('when list has a few random selections', () => {
    const result = listHelper.favoriteBlog(listOfBlogs)
    expect(result).toEqual(
            {
            _id: '5a422aa71b54a676234d17f3',
            title: 'How to eat a peach',
            author: 'Brad Pitt',
            url: 'http://www.google.com/',
            likes: 12,
            __v: 0
          }
    )
  })
})
