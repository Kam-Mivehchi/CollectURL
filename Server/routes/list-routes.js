const express = require('express');
const router = express.Router()
const { getAllLists, newList, getListById, getListItems, newListItem, removeListItem, removeList, updateList } = require('../controllers/list-controllers')
const { authMiddleware } = require("../utils/auth.js");

// ('Lists/')

//create List & get all Lists
router.use(authMiddleware);
router.route('/')
   .get(getAllLists)
   .post(newList)
// ('Lists/:ListId')
// get, update(addList,changeName), delete single Lists
// add and remove list from a List
router.route('/:listId')
   .get(getListById).delete(removeList).put(updateList)

router.route('/:listId/items')
   .get(getListItems)
   .post(newListItem)

router.route('/:listId/items/:itemId')
   .delete(removeListItem)
module.exports = router;
