const createCrudController = (Model) => {
  const getAll = async (req, res) => {
    const items = await Model.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  };

  const getOne = async (req, res) => {
    try {
      const item = await Model.findById(req.params.id);

      if (!item) {
        return res.status(404).json({
          success: false,
          message: "Resource not found",
        });
      }

      res.status(200).json({
        success: true,
        data: item,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  const create = async (req, res) => {
    try {
      const item = await Model.create(req.body);

      res.status(201).json({
        success: true,
        data: item,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  const update = async (req, res) => {
    try {
      const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!item) {
        return res.status(404).json({
          success: false,
          message: "Resource not found",
        });
      }

      res.status(200).json({
        success: true,
        data: item,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  const remove = async (req, res) => {
    try {
      const item = await Model.findByIdAndDelete(req.params.id);

      if (!item) {
        return res.status(404).json({
          success: false,
          message: "Resource not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Resource deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };

  return { getAll, getOne, create, update, remove };
};

export default createCrudController;
