const express = require("express");
const axios = require("axios");

const getCharacters = async (req, res) => {
  try {
    const {
      data: { results: characters },
    } = await axios.get("https://rickandmortyapi.com/api/character");

    res.status(200).json(characters);
  } catch (err) {
    return res.status(500).send("Interval Server Error");
  }
};

exports.getCharacters = getCharacters;
