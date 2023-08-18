const courses_model = require("./model");

module.exports = {
  get: async (_, res) => {
    res.json(await courses_model.find());
  },
  post: async (req, res) => {
    const new_course = new courses_model(req.body);

    try {
      const saved_course = await new_course.save();
      return res.status(200).json({
        success: true,
        data: saved_course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error.message,
      });
    }
  },
  put: async (req, res) => {
    const { id } = req.params;
    try {
      const updated_course = await courses_model.findByIdAndUpdate(
        { _id: id },
        { $set: req.body },
        { new: true }
      );
      res.status(201).json({
        success: true,
        data: updated_course,
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
      const deleted_course = await courses_model.findByIdAndDelete({ _id: id });

      res.status(200).json({
        success: true,
        data: deleted_course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error.message,
      });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const found_course = await courses_model.findById({ _id: id });
      res.status(200).json({
        success: true,
        data: found_course,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        data: error.message,
      });
    }
  },
};
