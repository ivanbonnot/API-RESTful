const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    const data = {
        name: 'ivan',
        website: 'somebody'
    };
    res.json(data);
});  

module.exports = router;