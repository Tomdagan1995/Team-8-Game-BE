require("../index");
const express = require("express");

const supabase = require("@supabase/supabase-js");

const AddScore = async (req, res) => {
  try {
    const { email, score } = req.body;
    const date = new Date().toLocaleString();

    await supabase.from("scores").insert({ email, score, date });

    res.status(200).send({ message: "Score added successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Error adding score to the database" });
  }
};

module.exports = { AddScore };
