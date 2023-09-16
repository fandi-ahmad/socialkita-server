const router = require("express").Router()
const { createProject, getProjectListByUser, getAllProjectList, updateProject, deleteProject } = require('../controllers/projectController')
const { addAuthorization } = require('../middleware/verifyToken')

router.get('/', getAllProjectList)
router.post('/create', addAuthorization, createProject)
router.get('/:uuid_user', addAuthorization, getProjectListByUser)
router.put('/update', addAuthorization, updateProject)
router.delete('/delete/:uuid', addAuthorization, deleteProject)


module.exports = router