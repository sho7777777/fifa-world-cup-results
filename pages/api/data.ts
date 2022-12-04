// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { result } from '../../result'
// import { TotalResult } from '../../interfaces/index';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  // res: NextApiResponse<TotalResult>
  res: NextApiResponse<any>
) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json(result)

}
