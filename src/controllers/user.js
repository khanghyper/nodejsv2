

const getHomePage = async (req, res) => {
    return res.send(`
        <h1>Home page</h1>
        <a href="?name=khang">user</a>
    `);
}

export {
    getHomePage
};