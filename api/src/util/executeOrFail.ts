export default function executeOrFail(
  cb: any,
  message: string = "Internal Server Error"
) {
  try {
    return cb();
  } catch (err) {
    console.error(err);
    throw new Error(message);
  }
}
