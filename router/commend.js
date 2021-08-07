const express = require('express')
const router = express.Router()
const {
    commend_delete,
    commend_get,
    commend_register,
    commend_update
} = require('../controller/commend')

// middleware 사용 안함 -> 비유저도 댓글을 남기기 위해서 

// detail get commend
router.get('/:commendId', commend_get)

// register commend
router.post('/', commend_register)

// update commend
router.patch('/:commendId', commend_update)

// detail commend
router.delete('/:commendId', commend_delete)

module.exports = router