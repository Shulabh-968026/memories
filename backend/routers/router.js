const express = require("express");
const router = express.Router()
const { getAllMemories, createMemory, getMemory, updateContact, deleteContact } = require("../controller/memoryController");

router.route("/")
        .get(getAllMemories)
        .post(createMemory)

router.route("/:id")
        .get(getMemory)
        .patch(updateContact)
        .delete(deleteContact)

module.exports = router;