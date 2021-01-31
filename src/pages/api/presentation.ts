import { NextApiRequest, NextApiResponse } from 'next';
import {sendPresentation} from "../../services/server/presentation";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await sendPresentation(req.body);
        console.log('req.body', req.body);
        console.log('result', result);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json(e.toString());
    }
}
