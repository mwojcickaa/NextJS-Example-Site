import type { NextApiRequest, NextApiResponse } from 'next'
import shopItems from './shopItems.json'


export default function getShopItems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(shopItems)
}
