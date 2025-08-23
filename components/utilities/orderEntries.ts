interface Blogs {
    id: string,
    title: string,
    description: string,
    thumbnailUrl: string,
    published: string,
    updated: string,
    content: string
}

const orderEntries = (entries: Blogs[]) => {
    const orderedEntries = entries.sort((x, y) => new Date(y.published).getTime() - new Date(x.published).getTime());
    console.log(orderedEntries);
    return orderedEntries;
}
export default orderEntries;


//const milli = new Date(getTime);
//console.log(milli.getTime());