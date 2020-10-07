const express = require("express");

const router=express.Router();
const {addUser,searchUser,report,report2,report3,locality,professionCount,professionCounts,averageGuest,details} =require("../controller/controller");

router.post('/adduser',addUser);
router.post('/search',searchUser);
router.get('/report',report);
router.get('/report2',report2);
router.get('/report3',report3);
router.get('/report4',locality);
router.get('/report5',professionCount);
router.get('/report6',professionCounts);
router.get('/report7',averageGuest);
router.get('/details/:_id',details);



module.exports=router;