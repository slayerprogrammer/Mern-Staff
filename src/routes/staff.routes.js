const express = require('express');
const router = express.Router();

const Staff = require('../models/staff');

router.get ('/', async (req, res) => {
    const staffs = await Staff.find();
    res.json(staffs);
});

router.get ('/:id', async (req, res) => {
    const staff = await Staff.findById(req.params.id);
    res.json(staff);
});

router.post('/', async (req, res) => {
    const { tcno, username, email } = req.body;
    const staff = new Staff ({tcno, username, email});
    await staff.save();
    res.json({status: "Staff Kaydedildi !"});
});

router.put('/:id', async (req, res) => {
    const { tcno, username, email } = req.body;
    const newStaff = {tcno, username, email};
    await Staff.findByIdAndUpdate(req.params.id,newStaff);
    res.json({status: "Staff Güncellendi !"});
});

router.delete('/:id', async (req, res) => {
    await Staff.findByIdAndRemove(req.params.id,newStaff);
    res.json({status: "Staff Kaldırıldı !"});
});
module.exports = router;
