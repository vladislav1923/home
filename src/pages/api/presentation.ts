import { NextApiRequest, NextApiResponse } from 'next';
import { sendPresentation } from '../../services/server/presentation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await sendPresentation(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json(e.toString());
  }
}
