const strContains = (cardTitle, searchTitle) => {
    if (cardTitle.toLowerCase().includes(searchTitle.toLowerCase())) {
        return true;
    } else {
        return false;
    };
};

export default strContains;