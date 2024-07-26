let products = [];

export default async function handler(req, res) {
  const { index } = req.query;
  if (req.method === 'DELETE') {
    const idx = parseInt(index, 10);
    if (idx >= 0 && idx < products.length) {
      products.splice(idx, 1);
      res.status(200).json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
