import * as fs from 'fs/promises'

const main = async () => {
	const file = await fs.readFile('db.json', 'utf-8')
	const jsonData = JSON.parse(file)
	jsonData.heroes.forEach((hero) => {
		hero.id = +hero.id
		// 	Object.entries(hero.powerstats).forEach(([key, value]) => {
		// 		// console.log(key, +value)
		// 		hero.powerstats[key] = +value || 1
		// 	})
	})
	// console.log(jsonData)
	fs.writeFile('db.json', JSON.stringify(jsonData))
}

main()
