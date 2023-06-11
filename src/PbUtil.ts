export function missing(): never {
  throw new Error("GRPC Error: Missing required field");
}
export function unreachable(): never {
  throw new Error("Unreachable");
}
