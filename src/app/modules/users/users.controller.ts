import express from 'express'

const router = express.Router()

router.route('/create-user').get()



export const UserRouter = router