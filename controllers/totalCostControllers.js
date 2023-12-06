const db = require('../models');
const Cost = db.Cost;
const axios = require('axios');

module.exports = {
  totalCost: async (req, res) => {
    try {
      const { kodeBarang, nilaiKomoditas } = req.body;

      const uraianBarangResponse = await axios.get(`https://insw-dev.ilcs.co.id/my/n/barang?hs_code=${kodeBarang}`);
      const uraianBarang = uraianBarangResponse.data.data[0].uraian_id;

      const tarifResponse = await axios.get(`https://insw-dev.ilcs.co.id/my/n/tarif?hs_code=${kodeBarang}`);
      const bmValue = tarifResponse.data.data[0].bm;

      const nilaiBM = (nilaiKomoditas * bmValue) / 100;

      const waktuInsert = new Date();

      const result = await Cost.create({
        id_simulasi: generateUUID(),
        kode_barang: kodeBarang,
        uraian_barang: uraianBarang,
        bm: bmValue,
        nilai_komoditas: nilaiKomoditas,
        nilai_bm: nilaiBM,
        waktu_insert: waktuInsert,
      });

      res.status(200).send({
        msg: "Estimated cost saved to database",
        status: true,
        result
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
