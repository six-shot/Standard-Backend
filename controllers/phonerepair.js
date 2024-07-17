const Phones = require("../models/phonerepair");
const mongoose = require("mongoose");

const getPhones = async (req, res) => {
  const phones = await Phones.find({}).sort({ createdAt: -1 });

  res.status(200).json(phones);
};

const getPhone = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Phones" });
  }

  const phones = await Phones.findById(id);

  if (!phones) {
    return res.status(404).json({ error: "No Phones" });
  }

  res.status(200).json(phones);
};

const createPhone = async (req, res) => {
  const {
   
    name,
    phoneNumber,
    brand,
    model,
    fault,
    photoImage,
    city,
    
  } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!phoneNumber) {
    emptyFields.push("phoneNumber");
  }
  if (!model) {
    emptyFields.push("model");
  }
  if (!brand) {
    emptyFields.push("brand");
  }
  if (!fault) {
    emptyFields.push("fault");
  }
  if (!photoImage) {
    emptyFields.push("photoImage");
  }
  if (!city) {
    emptyFields.push("city");
  }
  

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const phones = await Phones.create({
      name,
      phoneNumber,
      brand,
      model,
      fault,
      photoImage,
      city,
    });
    res.status(200).json(phones);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePhone= async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such phones" });
  }

  const phones = await Phones.findOneAndDelete({ _id: id });

  if (!phones) {
    return res.status(400).json({ error: "No such phones" });
  }

  res.status(200).json(phones);
};

const updatePhone = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such phones" });
  }

  const phones = await Phones.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!phones) {
    return res.status(400).json({ error: "No such phones" });
  }

  res.status(200).json(phones);
};

module.exports = {
  getPhone,
  getPhones,
  createPhone,
  deletePhone,
  updatePhone,
};
