var express = require('express');
var router = express.Router();

const productContoller = require("../controllers/productsController")

/* GET users listing. */
router.get('/', productContoller.getAll);
router.get('/:id', productContoller.getById);
router.post('/', productContoller.create);
router.put('/:id', productContoller.update);
router.put('/', productContoller.update);
router.delete('/:id', productContoller.delete);
module.exports = router;
