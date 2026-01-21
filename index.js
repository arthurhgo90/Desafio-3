let hero = {
	name: "Arthur",
    age: 36,
    type: "guerreiro"
}

generateHero(hero)

function generateHero(hero){
	if (hero.type === "mago"){
        attack = "magia"
    }
    else if (hero.type === "guerreiro"){
        attack = "espada"
    }
    else if (hero.type === "monge"){
        attack = "artes marciais"
    }
    else if (hero.type === "ninja"){
        attack = "shuriken"
    }    
}
console.log(`o ${hero.type} atacou usando ${attack}`)