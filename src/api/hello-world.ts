import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {


  res.send(`Hola caracola ${req.toString()}`);
}