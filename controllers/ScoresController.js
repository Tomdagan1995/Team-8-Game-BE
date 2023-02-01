require("../index");

const express = require("express");
const {  supabase } = require("../db_models");


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

const getAllScores = async (req, res) => {
  try {
    const email = req.user.email;
    const result = await supabase
      .from("scores")
      .select("*")
      .eq("email", email)
      .order("score desc")
      .all();

    if (result) {
      console.log("Scores retrieved from the database", result);
      res.status(200).send(result);
    } else {
      res.send("Error retrieving scores from the database", error);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Server error" });
  }
};

const getUserScores = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await supabase
      .from("scores")
      .select("*")
      .eq("id", id)
      .orderBy("created_at", "desc");
    if (result.length) {
      res.status(200).send({ scores: result });
    } else {
      res.status(404).send({ message: "No scores found for this user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Server error" });
  }
};

const getLastScore = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await supabase
      .from("scores")
      .where({ id: id })
      .order_by({ created_at: "desc" })
      .limit(1)
      .then((result) => {
        return result.data;
      });
    res.status(200).send({ data: result });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Error getting last score" });
  }
};
const getHighScore = async (res, req) => {
  try {
    const { id } = req.params;
    const scores = await supabase
      .from("scores")
      .select("*")
      .where("user_id", id)
      .order_by("score", "desc")
      .limit(1);
    res.send(scores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Error retrieving high score" });
  }
};

module.exports = {
  AddScore,
  getAllScores,
  getUserScores,
  getLastScore,
  getHighScore,
};
