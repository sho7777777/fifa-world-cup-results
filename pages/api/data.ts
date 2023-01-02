// 国データを返すAPI

import type { NextApiRequest, NextApiResponse } from 'next'
import { result } from '../../result'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(result)

}
