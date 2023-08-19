const users = require("./model");
const users_model = require("./model");

module.exports = {
  get: async (_, res) => {
    try {
      const users = await users_model.find();
      return res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error.message,
      });
    }
  },

  post: async (req, res) => {
    const new_user = new users_model(req.body);
    try {
      const saved_user = await new_user.save();
      return res.status(200).json({
        success: true,
        data: saved_user,
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        data: error.message,
      });
    }
  },
  put: async (req, res) => {
    const { id } = req.params;
    try {
      const updated_user = await users_model.findByIdAndUpdate(
        { _id: id },
        { $set: req.body },
        { new: true }
      );
      return res.status(201).json({
        success: true,
        data: updated_user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error.message,
      });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted_user = await users_model.findByIdAndDelete({ _id: id });

      return res.status(200).json({
        success: true,
        data: deleted_user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: error.message,
      });
    }
  },
};
