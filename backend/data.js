import bcrypt from 'bcryptjs';

const data = {
  products: [
    {
      //_id: '1',
      name: 'Conjunto negro',
      slug: 'conjunto-negro-1',
      category: 'Conjunto',
      image: '/images/p1.PNG', // 679px × 829px
      price: 120,
      countInStock: 2,
      brand: 'moda&estilo',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: '2',
      name: 'Conjunto blanco',
      slug: 'conjunto-blanco-1',
      category: 'Conjunto',
      image: '/images/p2.PNG', // 679px
      price: 250,
      countInStock: 20,
      brand: 'moda&estilo',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: '3',
      name: 'Conjunto blusa negra y falda tela jean',
      slug: 'conjunto-negro-2',
      category: 'Conjunto',
      image: '/images/p3.PNG',
      price: 25,
      countInStock: 15,
      brand: 'moda&estilo',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: '4',
      name: 'Conjunto rosa y blanco',
      slug: 'conjunto-blanco-2',
      category: 'Conjunto',
      image: '/images/p5.PNG',
      price: 65,
      countInStock: 2,
      brand: 'moda&estilo',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
  users: [
    {
      name: 'Victor',
      email: 'admin@ejemplo.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Camila',
      email: 'user@ejemplo.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};
export default data;
