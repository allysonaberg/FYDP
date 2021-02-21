const shirt = './Assets/shirt.png'
const shorts = './Assets/shorts.png'
const pants = './Assets/pants.png'
const bodysuit = './Assets/bodysuit.png'

const productList = [
    {
      id: 1,
      name: 'Cozy Fleece Perfect 2" Sweatshort',
      carbon: '42.6',
      rank: 'A',
      image: shorts,
      material1: '78% cotton',
      material2: '22% Polyester',
      analysis: 'The production of polyester uses harmful chemicals, including carcinogens, and if emitted to water and air untreated, can cause significant environmental damage. Most polyester is produced in countries such as China, Indonesia and Bangladesh',
      suggestion: 'Consider swapping linen for cotton to reduce this item’s carbon footprint by 8.1 CO2'
    },
    {
      id: 2,
      name: 'Gonzalo T-shirt',
      carbon: '202.8',
      rank: 'C',
      image: shirt,
      material1: '12% cotton',
      material2: '88% Polyester',
      analysis: 'This is a cool shirt but it has a ton of polyester lolz',
      suggestion: 'Consider swapping polyester for silk ooh la la. Also, will write some random text here so that we can see what this shiz looks like when it is many many many lines longggggggggg.'
    },
    {
      id: 3,
      name: 'Skyline Pant',
      carbon: '100.4',
      rank: 'B',
      image: pants,
      material1: '18% cotton',
      material2: '82% Polyester',
      analysis: 'This product also has a lot of polyester. Blah Blah blooh shirtz yay!! This is more text to fill the void',
      suggestion: 'Sick pants. Gonna write some text here so that we can have multiple linezzz'
    },
    {
      id: 4,
      name: 'Contour Crewneck Longsleeve Bodysuit',
      carbon: '400.5',
      rank: 'D',
      image: bodysuit,
      material1: '80% cotton',
      material2: '20% Polyester',
      analysis: 'This has like no polyester but a ton of carbon is released while making it',
      suggestion: 'This is a really long suggestion but it has nothing to say haha haha haha text text text text text. Consider doing other things'
    }
]
module.exports = {productList};