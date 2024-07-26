let products = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    products.push(req.body);
    res.status(201).json(req.body);
  } else if (req.method === 'GET') {
    res.json(products);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
let products = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    products.push(req.body);
    res.status(201).json(req.body);
  } else if (req.method === 'GET') {
    res.json(products);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
