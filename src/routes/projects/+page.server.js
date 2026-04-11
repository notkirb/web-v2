import { projects, games } from "./projects.js";

export function load() {
    return {
        projects: projects.map((project) => ({
            name: project.name,
            description: project.description,
            link: project.link,
            link_hint: project.link_hint
        })),
        games: games.map((game) => ({
            name: game.name,
            description: game.description,
            link: game.link,
            link_hint: game.link_hint
        }))
    }
}