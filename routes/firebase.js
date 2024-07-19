const { updateStatusIot, updateStatusCam,  fetchAllCamData,fetchAllIotData} = require('../firebase/firebaseFunc');
const express = require('express');
const router = express.Router();

router.get('/updateStatusIot/:docId', async (req, res) => {
    const { docId } = req.params;
    const { status } = req.query;
  
    if (!status) {
      return res.status(400).send('Status parameter is missing.');
    }
  
    const result = await updateStatusIot(docId, status);
  
    if (result) {
      res.status(200).send(`Document ${docId} updated successfully.`);
    } else {
      res.status(500).send('Error updating document.');
    }
  });
  router.get('/updateStatusCam/:docId', async (req, res) => {
    const { docId } = req.params;
    const { status } = req.query;
  
    if (!status) {
      return res.status(400).send('Status parameter is missing.');
    }
  
    const result = await updateStatusCam(docId, status);
  
    if (result) {
      res.status(200).send(`Document ${docId} updated successfully.`);
    } else {
      res.status(500).send('Error updating document.');
    }
  });
  router.get('/fetchAllIotData', async (req, res) => {

    const result = await fetchAllIotData();
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send('Error updating document.');
    }
  });
  router.get('/fetchAllCamData', async (req, res) => {

    const result = await fetchAllCamData();
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send('Error updating document.');
    }
  });
module.exports = router;



