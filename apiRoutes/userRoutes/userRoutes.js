const express = require("express")
const router = express.Router()
const { logIn } = require("./authentication")
const { authorize } = require("./middleware")
const { getUserData, getElectionData } = require("./getData")
console.log(authorize)

router.get("/login", logIn)

router.get("/getUserData", authorize, getUserData)

router.get("/getElectionData", authorize, getElectionData)

module.exports = router
