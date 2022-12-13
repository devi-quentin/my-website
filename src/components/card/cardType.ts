interface Card {
    data: {
        title: string,
        description: string,
        image: string,
        tags: string[],
        href: string,
        activated: boolean
    }
}

export default Card