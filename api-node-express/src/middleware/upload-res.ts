import { Request, Response, NextFunction } from 'express';

export default () => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log('upload is runing')
    res.json(req.files);
    // next();
  };
}
