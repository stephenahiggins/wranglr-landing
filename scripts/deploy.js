const dotenv = require('dotenv');
const FtpDeploy = require('ftp-deploy');
const path = require('path');

dotenv.config({ path: "./.env" });

async function main()
{
  try
  {
    const outDir = path.join(process.cwd(), "./out");

    await new FtpDeploy().deploy({
      user: process.env.FTP_USER,
      password: process.env.FTP_PASS,
      host: process.env.FTP_HOST,
      port: process.env.FTP_PORT,

      localRoot: outDir,
      remoteRoot: "/wranglr",
      include: ["*", "**/*"],
      exclude: [],
      deleteRemote: false, // Set to true if you want to delete ALL FILES in the remote root before uploading
      forcePasv: true
    })

    console.log("Succesfully deployed site")
    return 0;
  } catch (e)
  {
    console.error("An error occured during deployment:", e);
    return 1;
  }
}

main().then((code) => process.exit(code));