const router = require("express").Router();
const { Message, User, Project } = require("../models");

router.get('/:projectid', async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.projectid, {
            include: [
                {
                    model: User,
                },
                {
                    model: Project,
                },
            ],
        });

        res.json(message);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:userid/:projectid', async (req, res) => {
    console.log(req.params.projectid)
    try {
    const message = await Message.create({
        user_id: req.params.userid,
        project_id: req.params.projectid,
        text: req.body.text
    });
        
        res.json(message);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;