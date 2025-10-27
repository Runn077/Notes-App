const express = require("express");
const router = express.Router();
const { Users } = require("../models")

// get
router.get("/", async (req, res) => {
    const listOfUsers = await Users.findAll();
    res.json(listOfNotes);
});

router.get("/:id", async (req, res) =>{
    const user = await Users.findByPk(req.params.id)
    res.json(user);
})

// post
router.post("/", async (req, res) => {
    const user = await Users.create(req.body);
    res.json(user);
});

// put
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const {title, postBody} = req.body; // The updated data
    
    await Users.update(
      { title, postBody },     // values to update
      { where: { id: id } }    // condition
    );
    
    const updatedUser = await Users.findByPk(id);
    res.json(updatedUser);

})

// delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await User.destroy(
        {where: {id: id}
    });
    res.send("Delete is Successfull")
})

module.exports = router;