#!/usr/bin/env node

const cmdClr = require("../cmdClr")
const { exec } = require("child_process")

const repoUrl = "https://github.com/ZRNOF/p5-project.git"

function runCommand(command) {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout) => {
			if (error) {
				console.error(`${cmdClr("[x] Error:", "#FF0000")} ${error}`)
				reject(error)
			} else {
				console.log(stdout)
				resolve(stdout)
			}
		})
	})
}

async function main() {
	try {
		console.log(cmdClr("[*] Cloning the repository...", "#7FFF7F"))
		await runCommand(`git clone ${repoUrl}`)

		console.log(cmdClr("[*] Entering the project directory...", "#7FFF7F"))
		process.chdir("p5-project")

		console.log(cmdClr("[*] Installing npm dependencies...", "#7FFF7F"))
		await runCommand("npm install")

		console.log(cmdClr("[+] Installation completed successfully.", "#7FFF7F"))
	} catch (error) {
		console.error(`${cmdClr("[x] An error occurred:", "#FF0000")}`, error)
	}
}

main()
