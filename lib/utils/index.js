export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const addRound = (round) => {
    return round + 1
}