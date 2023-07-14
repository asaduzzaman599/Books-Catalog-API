import { connect } from "mongoose"
import config from "./src/config"

main().catch(err => console.log(err));

async function main() {
  const url = config.DATABASE_URL
  await connect(url);
 console.log('DB Connected Successfully')
}