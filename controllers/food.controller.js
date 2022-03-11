const Food = require('../models/food.model');
const mongoose = require('mongoose');

const product = {
    getProducts: async (req, res) => {
        try {
            const foods = await Food.find().sort(
                '-createdAt',
            );
            return res.status(200).json(foods);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    getProduct: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Food.findById(id);
            return res.status(200).json(product);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    createProduct: async (req, res) => {
        const newProduct = new Food(req.body);
        try {
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Food.findById(id);

            const newProduct = await product.updateOne({ $set: req.body });
            res.status(200).json(newProduct);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const product = await Food.findById(req.params.id);
            await product.deleteOne();
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = product;
