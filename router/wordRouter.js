const router = require('express').Router();
const wordController = require('../controllers/wordController');


router.post('/addword',wordController.addWord);

router.get('/:userID',wordController.allUserWords);


module.exports = router;