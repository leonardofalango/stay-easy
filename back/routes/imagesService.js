class ImageService
{
    static save = async (req, res) => {
        try {
            if (req.file !== undefined) {
                const { location, key } = req.file;
                req.body.image = location;
                req.body.imageKey = key;
            }
            
            const result = await UserModel.create(req.body);
            return res.send(result);
        } catch (error) {
            console.log("error",error)
            return res.status(400).send({ error: "Ocorreu um erro durante o cadastro tende mais tarde!" });
        }
    }

    static exclude = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await UserModel.findOneAndDelete({ _id: id });
            return res.json(result);
        } catch (error) {
            return res.status(400).send({ error: "Ocorreu um erro durante a exclusão tende mais tarde!" });
        }
    }

    static update = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await UserModel.findOneAndUpdate({ _id: id }, req.body);
            
            return res.status(200).send(result);
        } catch (error) {
            console.log("error",error)
            return res.status(400).send({ error: "Ocorreu um erro durante a alteração tende mais tarde!" });
        }
    }
}

module.exports = ImageService