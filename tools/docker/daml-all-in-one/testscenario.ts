import test, { Test } from "tape-promise/tape";

// import { exec } from 'child_process';

// const imageName = 'daml-all-in-one'; // docker image name

// const runDockerContainer = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const command = `docker run -d ${imageName}`; // Use -d to run in detached mode
//         exec(command, (error, stdout, stderr) => {
//             if (error) {
//                 reject(`Error: ${error.message}`);
//                 return;
//             }
//             if (stderr) {
//                 reject(`Stderr: ${stderr}`);
//                 return;
//             }
//             const containerId = stdout.trim();
//             resolve(containerId);
//         });
//     });
// };

// const main = async () => {
//     try {
//         const containerId = await runDockerContainer();
//         console.log('Newly created Docker container ID:', containerId);
//     } catch (error) {
//         console.error(error);
//     }
// };

const main = async () => {
    console.log("test")
};
main();